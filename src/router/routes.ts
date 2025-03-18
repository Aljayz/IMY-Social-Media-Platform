import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/HomePage.vue')},
      { name: 'Home', path: 'home-page', component: () => import('pages/HomePage.vue')},
      { name: 'Notificaiton', path: 'notif-page', component: () => import('pages/NotificationPage.vue')},
      { name: 'Profile', path: 'profile-page', component: () => import('pages/ProfilePage.vue')}

    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
