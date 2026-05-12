//  AppPaths — fuente única de verdad para todas las rutas de Clínica ABP.

export const AppPaths = {
  auth: {
    root:  '/auth',
    login: '/auth/login',
  },

  dashboard: '/dashboard',

  patients: {
    root:   '/pacientes',
    list:   '/pacientes',
    detail: (id: string) => `/pacientes/${id}`,
    new:  '/pacientes/nuevo',
  },

  appointments: {
    root:   '/citas',
    list:   '/citas',
    detail: (id: string) => `/citas/${id}`,
    new:  '/citas/nueva',
  },
  
  doctors: {
    root:   '/medicos',
    list:   '/medicos',
    detail: (id: string) => `/medicos/${id}`,
  },
  
  consultations: {
    root:   '/consultas',
    list:   '/consultas',
    detail: (id: string) => `/consultas/${id}`,
  },
  
  billing: {
    root:   '/facturacion',
    list:   '/facturacion',
    detail: (id: string) => `/facturacion/${id}`,
  },

  inventory: {
    root: '/inventario',
    list: '/inventario',
  },

  reports: {
    root:       '/reportes',
    dashboard:  '/reportes',
    income:   '/reportes/ingresos',
    appointments:      '/reportes/citas',
    doctors:    '/reportes/medicos',
  },

  configuration: '/configuracion',

} as const;

export const RouteSegments = {
  auth:            'auth',
  login:           'login',
  dashboard:       'dashboard',
  patients:        'pacientes',
  appointments:    'citas',
  doctors:         'medicos',
  consultations:   'consultas',
  billing:         'facturacion',
  inventory:       'inventario',
  reports: {
    root:           'reportes',
    income:         'ingresos',
    appointments:   'citas',
    doctors:        'medicos',
  },
  configuration: 'configuracion',
  detail:        ':id',
  new:           'nuevo',
} as const;
