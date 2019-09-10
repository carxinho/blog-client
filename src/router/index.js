import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/pages/Index/Index')
    },
    {
      path: '/login',
      component: () => import('@/pages/Login/Login')
    },
    {
      path: '/create',
      component: () => import('@/pages/Create/Create'),
      meta:{ requiresAuth: true }
    },
    {
      path: '/detail/:blogId',
      component:  () => import('@/pages/Detail/Detail')
    },
    {
      path: '/edit/:blogId',
      component: () => import('@/pages/Edit/Edit'),
      meta:{ requiresAuth: true }
    },
    {
      path: '/my',
      component: () => import('@/pages/My/My'),
      meta:{ requiresAuth: true }
    },
    {
      path: '/register',
      component: () => import('@/pages/Register/Register')
    },
    {
      path: '/user/:userId',
      component: () => import('@/pages/User/User')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    store.dispatch('checkLogin').then( isLogin => {
      if (!isLogin) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }
    })
  } else {
    next() // 确保一定要调用 next()
  }
})

export default router
