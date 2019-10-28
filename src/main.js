import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import Home from './pages/home.vue'
import continfo from './pages/continfor.vue'
import nfound from './pages/404.vue'
import VueAMap from 'vue-amap'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

library.add(faUserSecret)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(BootstrapVue)
Vue.use(Router)
Vue.use(VueAMap);


VueAMap.initAMapApiLoader({
  key: '	b3108ead3e4927fbbfd72e42b75fc179',
  plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType'],
  v: '1.4.4'
});

const router = new Router({
  routes: [
    { 
      path: '/', 
      component: Home,
      name: 'home'
    },
    {
      path: '/container',
      component: continfo,
      name: 'container',
    },
    {
      path: '/notfound',
      component: nfound,
      name: 'nfound',
    }
  ]
});


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
