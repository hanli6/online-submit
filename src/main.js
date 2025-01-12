import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from "@/store";
import tab from "@/store/tab";

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App),
  //生命周期函数，页面刷新时执行
  created() {
    this.$store.commit('addMenu', router);
  }
}).$mount('#app')
