import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/css/commen/icon.scss'







Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  if(to.matched.some(res=>res.meta.islogin)){//判断是否需要登录
    if (sessionStorage['user']) {
      if (to.meta.title) {
        document.title ='恒链科技 | ' +to.meta.title
      next()
      }
    }else{
      alert('请先登录')
    }

}else{
    next()
}
  
})
