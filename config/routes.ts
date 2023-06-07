const routes = [
  {
    path: '/',
    wrappers: ['@/components/RedirectWrapper'],
  },
  {
    path: '/login',
    component: './login',
    layout: false,
  },
  {
    path: '/404',
    component: './404',
    layout: false,
  },
  {
    path: '/403',
    component: './403',
  },
  {
    name: 'home',
    path: '/home',
    component: './home',
  },
  {
    name: 'access',
    path: '/access',
    component: './access',
  },
  {
    name: 'table',
    path: '/table',
    component: './table',
    access: 'admin',
  },
  {
    path: '/*',
    component: './404',
  },
];

export default routes;
