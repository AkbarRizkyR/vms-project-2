import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/portal',
    component: () => import('@/layouts/PortalLayout.vue'),
    children: [
      {
        path: 'home',
        name: 'HomePortal',
        component: () => import('@/components/portal/HomePortal.vue'),
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('@/components/portal/AboutPortal.vue'),
      },
      {
        path: 'faq',
        name: 'Faq',
        component: () => import('@/components/portal/FaqPortal.vue'),
      },
      {
        path: 'register',
        name: 'Registration',
        component: () => import('@/components/portal/RegisterPortal.vue'),
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/components/portal/LoginPortal.vue'),
      },
      {
        path: 'form_register',
        name: 'FormRegister',
        component: () => import('@/components/portal/FormRegistrasiPortal.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
