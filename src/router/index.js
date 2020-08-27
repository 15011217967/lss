import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '../views/Home.vue';
Vue.use(VueRouter);

const router = new VueRouter({
  routes:[{
    path:'/home',
    name:'home',
    component:home
  }],
  mode:'history',
})

export default router;