import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../Home.vue';
import Notification from '../Notifications.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: Notification,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
