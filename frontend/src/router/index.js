import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CitaDetail from '../views/CitaDetail.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/citas',
    name: 'citas',

    component: () =>
      import('../views/CitasView.vue'),
  },
  {
    path: '/cita/:id',
    name: 'Cita single',
    component: CitaDetail,
  },
  {
    path: '/about',
    name: 'about',

    component: () =>
      import('../views/AboutView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
