import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import UnderConstructionView from '@/views/UnderConstructionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/:catchAll(.*)',
      name: 'UnderConstruction',
      component: UnderConstructionView
    }
  ]
})

export default router