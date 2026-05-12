import { AppPaths } from '../constants/app-paths';

export interface NavItem {
  label: string;
  icon: string;
  route: string;
  badge?: number;
}

export interface NavSection {
  label: string;
  items: NavItem[];
}

export const NAV_SECTIONS: NavSection[] = [
  {
    label: 'Principal',
    items: [
      { label: 'Dashboard',  icon: 'pi pi-home',          route: AppPaths.dashboard },
      { label: 'Pacientes',  icon: 'pi pi-users',         route: AppPaths.patients.list, badge: 248 },
      { label: 'Citas',      icon: 'pi pi-calendar',      route: AppPaths.appointments.list,     badge: 12 },
      { label: 'Médicos',    icon: 'pi pi-heart',         route: AppPaths.doctors.list },
      { label: 'Consultas',  icon: 'pi pi-file',          route: AppPaths.reports.appointments },
    ],
  },
  {
    label: 'Administración',
    items: [
      { label: 'Facturación', icon: 'pi pi-receipt',  route: AppPaths.billing.list },
      { label: 'Inventario',  icon: 'pi pi-box',      route: AppPaths.inventory.list },
      { label: 'Reportes',    icon: 'pi pi-chart-bar', route: AppPaths.reports.root },
    ],
  },
  {
    label: 'Sistema',
    items: [
      { label: 'Configuración', icon: 'pi pi-cog',      route: AppPaths.configuration },
      { label: 'Soporte',       icon: 'pi pi-headphones', route: '/support' },
    ],
  },
];
