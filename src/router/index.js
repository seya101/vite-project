import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/qa',
      name: 'about',
      component: () => import('../views/About.vue')
    }
    ,
    {
      path: '/productivity',
      name: 'productivity',
      component: () => import('../views/Productivity.vue')
    }
    ,
    {
      path: '/management',
      name: 'management',
      component: () => import('../views/Management.vue')
    }
    ,
    {
      path: '/behavior',
      name: 'behavior',
      component: () => import('../views/Behavior.vue')
    }
  ]
})

export default router
