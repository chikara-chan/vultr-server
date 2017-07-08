// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAMap from 'vue-amap'

Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
  key: '18053b827d0769b1e1d76ee318fd429f',
  plugin: ['MapType', 'Geolocation']
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
