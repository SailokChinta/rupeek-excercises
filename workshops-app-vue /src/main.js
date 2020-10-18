import Vue from 'vue';
import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff';
// import FontAwesomeIcon from "@fortawesome/vue-fontawesome";

import router from './router/router';

import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';

Vue.config.productionTip = false
Vue.use(VueToast);
Vue.filter('formatDate', ( ISODate )=>{
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec'
  ]
  const date = new Date( ISODate );
  return `${months[date.getMonth()]} ${date.getDay()+1}, ${date.getFullYear()}`;
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
