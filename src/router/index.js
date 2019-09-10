import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login/Login'
import Create from '@/pages/Create/Create'
import Detail from '@/pages/Detail/Detail'
import Edit from '@/pages/Edit/Edit'
import Index from '@/pages/Index/Index'
import My from '@/pages/My/My'
import Register from '@/pages/Register/Register'
import User from '@/pages/User/User'
import store from '@/store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/create',
      component: Create,
      meta:{ requiresAuth: true }
    },
    {
      path: '/detail/:blogId',
      component: Detail
    },
    {
      path: '/edit/:blogId',
      component: Edit,
      meta:{ requiresAuth: true }
    },
    {
      path: '/my',
      component: My,
      meta:{ requiresAuth: true }
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/user/:userId',
      component: User
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
