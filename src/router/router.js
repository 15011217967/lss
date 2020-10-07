
const routes = [
  {
    path:'/login',
    name:'login',
    component: () => import('@/page/login.vue'),
    meta:{
      keepAlive:true
    },
  },
  {
    path: '/index',
    name: 'index',
    redirect:'/kk',
    component: () => import('@/page/home.vue'),
    children:[{
      path:'/kk',
      name:'kk',
      component:() => import('@/page/kk.vue')
    }]
  },
  {
    path:'*',
    redirect:'/login'
  }
]

export default routes;