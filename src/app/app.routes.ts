import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Bienvenido a la Gestión de Revaloración',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'auth0',
    loadComponent: () =>
      import('./auth/auth.component').then((m) => m.AuthComponent),
    children: [
      {
        path: 'login',
        title: 'Login',
        loadComponent: () =>
          import('./auth/pages/login/login.component').then((m) => m.LoginComponent),
      },
      {
        path: 'register',
        title: 'Registro',
        loadComponent: () =>
          import('./auth/pages/register/register.component').then((m) => m.RegisterComponent),
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'login',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'dashboard',
    title: 'Dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then((m) => m.DashboardComponent),
    children: [
      {
        path: 'revaluation-management',
        title: 'Gestión de Revaloración',
        loadComponent: () =>
          import('./dashboard/revaluation-management/revaluation-management.component').then(
            (m) => m.RevaluationManagementComponent
          ),
        children: [
          {
            path: 'overview',
            title: 'Resumen General',
            loadComponent: () =>
              import('./dashboard/revaluation-management/pages/overview/overview.component').then((m) => m.OverviewComponent),
          },
          {
            path: 'patients',
            title: 'Gestión de Pacientes',
            loadComponent: () =>
              import('./dashboard/revaluation-management/pages/patients/patients.component').then((m) => m.PatientsComponent),
          },
          {
            path: 'consultorio/:id',
            title: 'Detalle Consultorio',
            loadComponent: () =>
              import('./dashboard/revaluation-management/pages/consultorio-detail/consultorio-detail.component').then(
                (m) => m.ConsultorioDetailComponent
              ),
          },
          {
            path: '',
            redirectTo: 'overview',
            pathMatch: 'full',
          },
          {
            path: '**',
            redirectTo: 'overview',
            pathMatch: 'full',
          },
        ],
      },
      {
        path: '**',
        redirectTo: 'revaluation-management/overview',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
