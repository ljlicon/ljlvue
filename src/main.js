import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import axios from 'axios'
axios.defaults.baseURL="http://127.0.0.1:5000"
// axios.defaults.baseURL="http://192.168.9.16:8083"
Vue.prototype.axios=axios

import AMap from 'vue-amap';
Vue.use(AMap);
AMap.initAMapApiLoader({
  key: '6541f8525836f78f8e6e3802b93e1098',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});
new Vue({
  router,
  store,

  render: h => h(App)
}).$mount('#app')
