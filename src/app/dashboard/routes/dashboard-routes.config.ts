export interface MenuItem {
    title: string;
    path: string;
}

export interface AppRoutesConfig {
    [key: string]: MenuItem[];
}

export interface AppRoutesSidebar {
    [key: string]: string;
}

export const APP_ROUTES: AppRoutesConfig = {
    'revaluation-management': [
        { title: 'Resumen General', path: '/dashboard/revaluation-management/overview' },
        { title: 'Gestión de Pacientes', path: '/dashboard/revaluation-management/patients' },
    ],
};

export const APP_ROUTES_SIDEBAR: AppRoutesSidebar = {
    'revaluation-management': 'Gestión de Revaloración'
};

