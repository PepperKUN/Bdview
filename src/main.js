import 'core-js'
import Vue from 'vue'
import ECharts from 'vue-echarts'
import App from './App.vue'
import { Pagination, Scrollbar } from 'element-ui'
import store from "./store";
import router from "./router";

import dataFrame from './components/common/dataFrame.vue'

import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/common.css'

import yunnan from './assets/js/yunnan.json'
ECharts.registerMap('yunnan', yunnan)

Vue.use(Pagination)
Vue.use(Scrollbar)
Vue.config.productionTip = false
Vue.component('DataFrame', dataFrame);
Vue.component('v-chart', ECharts);


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
