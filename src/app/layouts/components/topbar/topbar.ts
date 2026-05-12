import { Component, output, signal, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { MenuModule } from 'primeng/menu';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TooltipModule } from 'primeng/tooltip';
import { MenuItem } from 'primeng/api';
import { ThemeService } from '@core/services/theme.service';

@Component({
  selector: 'app-topbar',
  imports: [
    FormsModule, InputTextModule, ButtonModule, BadgeModule,
    AvatarModule, MenuModule, SelectButtonModule, TooltipModule,
  ],
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss',
})
export class Topbar {
  private router = inject(Router);
  readonly theme = inject(ThemeService);
  
  menuToggle = output<void>();

  isDark = signal(false);

  // Derivar breadcrumb desde la URL activa
  currentRoute = toSignal(
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map(() => this.router.url.split('/').filter(Boolean).pop() ?? 'dashboard')
    ),
    { initialValue: 'dashboard' }
  );

  userMenuItems: MenuItem[] = [
    { label: 'Mi Perfil',      icon: 'pi pi-user',      command: () => this.router.navigate(['/perfil']) },
    { label: 'Configuración',  icon: 'pi pi-cog',        command: () => this.router.navigate(['/configuracion']) },
    { separator: true },
    { label: 'Cerrar sesión',  icon: 'pi pi-sign-out',   command: () => this.router.navigate(['/auth/login']) },
  ];

  toggleDark() {
    this.isDark.update(v => !v);
    document.documentElement.classList.toggle('dark-mode', this.isDark());
  }

  get pageTitle(): string {
    const map: Record<string, string> = {
      dashboard: 'Dashboard', pacientes: 'Pacientes',
      citas: 'Citas', medicos: 'Médicos',
      consultas: 'Consultas', facturacion: 'Facturación',
      inventario: 'Inventario', reportes: 'Reportes',
      configuracion: 'Configuración', soporte: 'Soporte',
    };
    return map[this.currentRoute()] ?? 'Dashboard';
  }
}
