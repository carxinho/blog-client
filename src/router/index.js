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

Vue.use(Router)

export default new Router({
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
      component: Create
    },
    {
      path: '/detail',
      component: Detail
    },
    {
      path: '/edit',
      component: Edit
    },
    {
      path: '/my',
      component: My
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/user',
      component: User
    }
  ]
})
