// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import G6 from '@antv/g6';
Vue.config.productionTip = false
import iView from 'iview'
import 'iview/dist/styles/iview.css'    // 使用 CSS
Vue.use(iView)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
