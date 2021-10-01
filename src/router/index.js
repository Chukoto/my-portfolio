import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Skill from '@/pages/Skill';
import Contact from '@/pages/Contact';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/skill',
    name: 'Skill',
    component: Skill,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
