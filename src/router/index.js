import Vue from 'vue'
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'login',
    meta:{
      islogin:false,
      title:'登录页面'
    },
    component: () => import('../components/login.vue')
  },
  {
    path:'/components/adminpages/index',
    name:'/index',
    meta:{
      islogin:true,
      title:'主页'
    },
    component:()=>import('../components/adminpages/index.vue'),
    children: [
      {path: '',name:'fuck1',meta:{islogin:true,title:'默认路由1'}, component: ()=>import('@/components/adminpages/pagestest1')},
      {path: 'test1',name:'fuck1',meta:{islogin:true,title:'默认路由1'}, component: ()=>import('@/components/adminpages/pagestest1')},
      {path: 'test2',name:'fuck2',meta:{islogin:true,title:'路由2'}, component: ()=>import('@/components/adminpages/pagestest2')},
      {path: 'test3',name:'fuck3',meta:{islogin:true,title:'路由3'}, component: ()=>import('@/components/adminpages/pagestest3')},
      {path: 'test4',name:'fuck4',meta:{islogin:true,title:'路由4'}, component: ()=>import('@/components/adminpages/test1')},
      {path: 'test5',name:'fuck5',meta:{islogin:true,title:'路由5'}, component: ()=>import('@/components/adminpages/test2')},
      {path: 'test6',name:'fuck6',meta:{islogin:true,title:'路由6'}, component: ()=>import('@/components/adminpages/test3')},
      {path: 'test7',name:'fuck7',meta:{islogin:true,title:'路由7'}, component: ()=>import('@/components/adminpages/test4')},
      {path: 'test8',name:'fuck8',meta:{islogin:true,title:'路由8'}, component: ()=>import('@/components/adminpages/test5')},
      {path: 'test9',name:'fuck9',meta:{islogin:true,title:'路由9'}, component: ()=>import('@/components/adminpages/test6')},
      {path: 'test10',name:'fuck10',meta:{islogin:true,title:'路由10'}, component: ()=>import('@/components/adminpages/test10')},
      {path: 'test11',name:'fuck11',meta:{islogin:true,title:'路由11'}, component: ()=>import('@/components/adminpages/test11')},
      {path: 'test12',name:'fuck12',meta:{islogin:true,title:'路由12'}, component: ()=>import('@/components/adminpages/test12')},
      {path: 'test13',name:'fuck13',meta:{islogin:true,title:'路由13'}, component: ()=>import('@/components/adminpages/test13')},
      {path: 'test14',name:'fuck14',meta:{islogin:true,title:'路由14'}, component: ()=>import('@/components/adminpages/test14')},


    ]
  },
  {
    path:'/components/commen/header',
    name:'header',
    meta:{
      islogin:true,
      title:'头部组件'
    },
    component:()=>import('../components/commen/header.vue')
  },
  {
    path:'/components/commen/aside',
    name:'/aside',
    meta:{
      islogin:true,
      title:'侧边组件'
    },
    component:()=>import('../components/commen/aside.vue')
  },
  
]

const router = new VueRouter({
  routes,
  mode: 'hash'
})

export default router
