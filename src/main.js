import Vue from 'vue';
import Antd from 'ant-design-vue/es'
import 'ant-design-vue/dist/antd.css';
import App from './App';

Vue.use(Antd);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');