import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { AppPaths } from '@core/constants/app-paths';

@Component({
  selector: 'app-not-found',
  imports: [ButtonModule],
  templateUrl: './not-found.html',
  styleUrl: './not-found.scss',
})
export class NotFound {
  private router = inject(Router);

  rutaActual = this.router.url;
  contador   = signal(10);

  private intervalo = setInterval(() => {
    this.contador.update(n => {
      if (n <= 1) { clearInterval(this.intervalo); this.goToDashboard(); }
      return n - 1;
    });
  }, 1000);

  goBack() {
    history.back();
  }

  goToDashboard() {
    this.router.navigate([AppPaths.dashboard]);
  }

  goToPatients() {
    this.router.navigate([AppPaths.patients.list]);
  }
  
  goToAppointments() {
    this.router.navigate([AppPaths.appointments.list]);
  }

  goToReports() {
    this.router.navigate([AppPaths.reports.dashboard]);
  }

  goToConfiguration() {
    this.router.navigate([AppPaths.configuration]);
  }
}
