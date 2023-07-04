import { createRouter, createWebHistory } from 'vue-router';

// Import your component files
import PortalLayout from '@/layouts/PortalLayout.vue';
import HomePortal from '@/components/portal/HomePortal.vue';
import About from '@/components/portal/AboutPortal.vue';
import Faq from '@/components/portal/FaqPortal.vue';
import Registration from '@/components/portal/RegisterPortal.vue';
import Login from '@/components/portal/LoginPortal.vue';
import FormRegister from '@/components/portal/FormRegistrasiPortal.vue'

const routes = [
  {
    path: '/portal',
    component: PortalLayout,
    children: [
      {
        path: 'home',
        name: 'HomePortal',
        component: HomePortal,
      },
      {
        path: 'about',
        name: 'About',
        component: About,
      },
      {
        path: 'faq',
        name: 'Faq',
        component: Faq,
      },
      {
        path: 'register',
        name: 'Registration',
        component: Registration,
      },
      {
        path: 'login',
        name: 'Login',
        component: Login,
      },
      {
        path: 'form_register',
        name: 'FormRegister',
        component: FormRegister,
      },
    ],
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
