import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/components/login/login.vue'
import top from '@/components/top/top.vue'
import firebase from '@/firebase.js'
import signup from '@/components/signup/signup.vue'
import authorization from '@/components/authorization/authorization.vue'
Vue.use(VueRouter)

const routes = [
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
