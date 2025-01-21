import { createWebHashHistory, createRouter } from 'vue-router'

import HomeView from './views/HomeView.vue';
import AboutView from './views/AboutView.vue';
import ContactsView from './views/ContactsView.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
        path: '/',
        name: 'homepage',
        component: HomeView
    },
    {
      path: '/chisono',
      name: 'chisono',
      component: AboutView
    },
    {
      path: '/contatti',
      name: 'contatti',
      component: ContactsView
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0 };
  }
})

export {router};