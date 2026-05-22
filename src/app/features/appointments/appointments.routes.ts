import { Routes } from '@angular/router';

export const appointments_routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/appointment-list/appointment-list')
        .then(m => m.AppointmentList),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./pages/appointment-detail/appointment-detail')
        .then(m => m.AppointmentDetail),
  },
];
