import { Routes } from '@angular/router';
import { RouteSegments as R } from './core/constants/app-paths';
import { authGuard } from '@core/guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: R.dashboard,
    pathMatch: 'full',
  },
  {
    path: R.auth,
    children: [
      {
        path: R.login,
        loadComponent: () =>
          import('./features/auth/login/login')
            .then(m => m.Login),
      },
      { path: '', redirectTo: R.login, pathMatch: 'full' },
    ],
  },
  {
    path: '',
    loadComponent: () =>
      import('./layouts/shell/shell')
        .then(m => m.Shell),
    canActivate: [authGuard],
    children: [
      {
        path: R.dashboard,
        title: 'Dashboard · Clínica ABP',
        loadComponent: () =>
          import('./features/dashboard/pages/dashboard/dashboard')
            .then(c => c.Dashboard),
      },
      {
        path: R.patients,
        title: 'Pacientes · Clínica ABP',
        loadChildren: () =>
          import('./features/patients/patient.routes')
            .then(c => c.patients_routes),
      },
      {
        path: R.appointments,
        title: 'Citas · Clínica ABP',
        loadChildren: () =>
          import('./features/appointments/appointments.routes')
            .then(c => c.appointments_routes),
      },
      {
        path: R.doctors,
        title: 'Médicos · Clínica ABP',
        loadChildren: () =>
          import('./features/doctors/doctors.routes')
            .then(c => c.doctors_routes),
      },
      {
        path: R.consultations,
        title: 'Consultas · Clínica ABP',
        loadChildren: () =>
          import('./features/consultations/consultations.routes')
            .then(c => c.consultations_routes),
      },
      {
        path: R.billing,
        title: 'Facturación · Clínica ABP',
        loadChildren: () =>
          import('./features/billing/billing.routes')
            .then(m => m.billing_routes),
      },
      {
        path: R.inventory,
        title: 'Inventario · Clínica ABP',
        loadChildren: () =>
          import('./features/inventory/inventory.routes')
            .then(m => m.inventory_routes),
      },
      {
        path: R.reports.root,
        title: 'Reportes · Clínica ABP',
        loadChildren: () =>
          import('./features/reports/reports.routes')
            .then(m => m.reports_routes),
      },
      {
        path: R.configuration,
        loadComponent: () =>
          import('./features/configuration/configuration')
            .then(m => m.Configuration),
        title: 'Configuración · Clínica ABP',
      },
    ],
  },
  {
    path: '**',
    loadComponent: () =>
      import('./shared/components/not-found/not-found')
        .then(m => m.NotFound),
  },
];
