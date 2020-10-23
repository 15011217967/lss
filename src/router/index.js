import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '@/router/router.js';
import store from '@/store/index';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode:'history',
})

var app = new Vue({
  store
})
router.beforeEach((to, from, next) => {
  if(to.path === '/login') {
    console.log(to, from, next)
    next();
  }else{
    if(localStorage.getItem('token')) {
      app.$store.commit('SET_BAR_LIST', to.matched)
      next();
    }else{
      next('/login')
    }
  }
})
export default router;