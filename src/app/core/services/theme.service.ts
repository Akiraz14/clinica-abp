import { Injectable, signal, effect, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { updatePreset, updateSurfacePalette } from '@primeuix/themes';

export type ThemeMode = 'light' | 'dark';
export type ThemePreset = 'aura' | 'lara' | 'nora' | 'material';

export interface ThemeConfig {
  mode: ThemeMode;
  preset: ThemePreset;
  primaryColor: string;
}

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private doc = inject(DOCUMENT);

  // ── Estado reactivo ───────────────────────────────────
  mode         = signal<ThemeMode>(this.loadSaved('clinic-theme-mode', 'light') as ThemeMode);
  preset       = signal<ThemePreset>(this.loadSaved('clinic-theme-preset', 'aura') as ThemePreset);
  primaryColor = signal<string>(this.loadSaved('clinic-theme-color', '#0ea5e9'));

  isDark = signal(this.mode() === 'dark');

  // Paleta de colores disponibles para la clínica
  readonly colorPalette = [
    { name: 'Cielo',    value: '#0ea5e9', shade: { 500: '#0ea5e9', 600: '#0284c7' } },
    { name: 'Teal',     value: '#0d9488', shade: { 500: '#0d9488', 600: '#0f766e' } },
    { name: 'Índigo',   value: '#4f46e5', shade: { 500: '#4f46e5', 600: '#4338ca' } },
    { name: 'Violeta',  value: '#7c3aed', shade: { 500: '#7c3aed', 600: '#6d28d9' } },
    { name: 'Rosa',     value: '#e11d48', shade: { 500: '#e11d48', 600: '#be123c' } },
    { name: 'Naranja',  value: '#ea580c', shade: { 500: '#ea580c', 600: '#c2410c' } },
  ];

  readonly presets: ThemePreset[] = ['aura', 'lara', 'nora', 'material'];

  constructor() {
    // Aplicar tema guardado al iniciar
    this.applyMode(this.mode());

    // Efecto: reacciona a cambios de modo
    effect(() => {
      const m = this.mode();
      this.applyMode(m);
      this.save('clinic-theme-mode', m);
      this.isDark.set(m === 'dark');
    });

    // Efecto: reacciona a cambios de color primario
    effect(() => {
      const color = this.primaryColor();
      this.applyPrimaryColor(color);
      this.save('clinic-theme-color', color);
    });
  }

  // ── Acciones públicas ─────────────────────────────────

  toggleMode() {
    this.mode.update(m => m === 'light' ? 'dark' : 'light');
  }

  setMode(mode: ThemeMode) {
    this.mode.set(mode);
  }

  setPreset(preset: ThemePreset) {
    this.preset.set(preset);
    this.save('clinic-theme-preset', preset);
    // El preset se aplica recargando la hoja de estilos de PrimeNG
    // En producción usarías updatePreset() de @primeuix/themes
    this.reloadPrimeNGTheme(preset);
  }

  setPrimaryColor(color: string) {
    this.primaryColor.set(color);
  }

  // ── Métodos privados ──────────────────────────────────

  private applyMode(mode: ThemeMode) {
    const html = this.doc.documentElement;
    if (mode === 'dark') {
      html.classList.add('dark-mode');
      html.setAttribute('data-theme', 'dark');
    } else {
      html.classList.remove('dark-mode');
      html.setAttribute('data-theme', 'light');
    }
  }

  private applyPrimaryColor(color: string) {
    // Actualiza el token CSS global
    this.doc.documentElement.style.setProperty('--clinic-primary', color);

    // Para PrimeNG v21 con @primeuix/themes:
    // updateSurfacePalette({ primary: color });
  }

  private reloadPrimeNGTheme(preset: ThemePreset) {
    // En una app real, aquí cambiarías el preset dinámicamente
    // usando la API de @primeuix/themes
    console.log(`[ThemeService] Preset cambiado a: ${preset}`);
  }

  private loadSaved(key: string, fallback: string): string {
    if (typeof localStorage === 'undefined') return fallback;
    return localStorage.getItem(key) ?? fallback;
  }

  private save(key: string, value: string): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(key, value);
    }
  }
}
