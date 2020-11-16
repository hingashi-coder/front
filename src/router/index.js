import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/components/login/login.vue'
import top from '@/components/top/top.vue'
import firebase from '@/firebase.js'
import signup from '@/components/signup/signup.vue'
import authorization from '@/components/authorization/authorization.vue'
import deviceRegister from '@/components/deviceRegister/deviceRegister.vue'
import accountSetting from '@/components/accountSetting/accountSetting.vue'
import changePassword from '@/components/accountSetting/changePass/changePassword.vue'
import changeAddress from '@/components/accountSetting/changeAddress/changeAddress.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/index.html',
    component: top,
    alias: '/',
    meta: { requiresAuth: true }
  },
  {
    path: '/',
    component: top,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/signup',
    component: signup,
    name: 'signup'
  },
  {
    path: '/authorization',
    component: authorization,
    name: 'authorization',
    meta: { requiresAuth: true }
  },
  {
    path: '/deviceRegister',
    component: deviceRegister,
    name: 'deviceRegister',
    meta: { requiresAuth: true }
  },
  {
    path: '/accountSetting',
    component: accountSetting,
    name: 'accountSetting'
  },
  {
    path: '/changePassword',
    component: changePassword,
    name: 'changePassword'
  },
  {
    path: '/changeAddress',
    component: changeAddress,
    name: 'changeAddress'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(recode => recode.meta.requiresAuth)
  console.log(requiresAuth)
  if (requiresAuth && !(await firebase.getCurrentUser())) {
    next({ path: '/login' })
  } else {
    next()
  }
})
export default router
