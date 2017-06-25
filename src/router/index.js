import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/home',
      component: resolve => require(['../views/Home.vue'],resolve)
    },
    {
      path: '/hello',
      component: resolve => require(['../views/Hello.vue'],resolve)
    },
    {
      path: '/hello2',
      component: resolve => require(['../views/HelloFromVux.vue'],resolve)
    },
    {
      path: '/contacts',
      component: resolve => require(['../views/Contacts.vue'],resolve)
    },
    {
      path: '/register',
      component: resolve => require(['../views/register/register.vue'],resolve)
    },
    {
      path: '/login',
      component: resolve => require(['../views/login/login.vue'],resolve)
    }
  ]
})
