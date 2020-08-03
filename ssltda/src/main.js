import Vue from 'vue'
import App from './App.vue'
import 'admin-lte/dist/css/adminlte.min.css'
import './assets/fontawesome-free-5.14.0-web/css/all.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import PageTitle from './mixins/PageTitle'
import ContentHeader from './templates/ContentHeader.vue'

// import jQuery from  'jquery'
// window.jQuery=jQuery

// global.jQuery = require('jquery');
// var $ = global.jQuery;
// window.$ = $;


import router from './router'
Vue.config.productionTip = false
Vue.mixin(PageTitle)
Vue.component('ContentHeader',ContentHeader)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

import 'bootstrap/dist/js/bootstrap.min.js'
import 'admin-lte/dist/js/adminlte'