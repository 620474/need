import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../pages/HomePage/HomePage.vue';
import PdpPage from "@/pages/PdpPage/PdpPage";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/components',
    name: 'Components',
    component: () => import('../pages/ComponentsPage/ComponentsPage.vue')
  },
  {
    path: '/pdp',
    name: 'Pdp',
    component: PdpPage
  }
];
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
