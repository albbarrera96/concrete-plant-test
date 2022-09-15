import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../components/LogIn.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('../views/Dashboard.vue') 
    },
    {
      path: '/newuser',
      name: 'NewUsers',
      component: ()=> import('../components/NewUser.vue')
    },
    {
      path: '/newform',
      name: 'NewForm',
      component: ()=>import('../components/NewForm.vue')
    }
  ]
})

export default router
