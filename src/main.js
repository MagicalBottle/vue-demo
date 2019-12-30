import Vue from 'vue'
import VueRouter from 'vue-router'
import routers from './router/router'
//import home from './page/home/home.vue'
//import store from './store/store'

Vue.config.productionTip = false

Vue.use(VueRouter)
const router =new VueRouter({
  routes:routers
})
new Vue({
  router,
  //render: h => h(home)
  //store
}).$mount('#app')
