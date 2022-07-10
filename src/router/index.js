import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home')
  },
  {
    path: '/auto-temp',
    name: 'autoTemp',
    component: () => import('@/views/AutoTemp')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/Test')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
