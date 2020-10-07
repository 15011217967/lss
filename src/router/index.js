import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '@/router/router.js';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode:'history',
})

router.beforeEach((to, from, next) => {
  if(to.path === '/login') {
    console.log(to, from, next)
    next();
  }else{
    if(localStorage.getItem('token')) {
      next();
    }else{
      next('/login')
    }
  }
})
export default router;