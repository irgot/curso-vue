import Vue from 'vue'
import App from './App.vue'
import 'admin-lte/dist/css/adminlte.min.css'
import './assets/fontawesome-free-5.14.0-web/css/all.min.css'
// import jQuery from  'jquery'
// window.jQuery=jQuery

// global.jQuery = require('jquery');
// var $ = global.jQuery;
// window.$ = $;
import 'admin-lte/dist/js/adminlte'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
