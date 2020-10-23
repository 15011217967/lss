import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from 'axios'
import util from '@/util/util.js'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.prototype.$util = util;

axios.defaults.withCredentials = true;
axios.defaults.baseURL = '/api';

axios.interceptors.request.use((config) => {
  if (localStorage.getItem('token')) {
    config.headers.Authorization = localStorage.getItem('token')
  }
  return config;
}, err => Promise.reject(err));

Vue.use(ViewUI);

Vue.prototype.$axios = axios;
Vue.config.productionTip = false

Vue.prototype.$bus = new Vue;
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
