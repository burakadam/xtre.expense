import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import UniqueId from 'vue-unique-id';

import router from './router';

import './assets/coolicons/coolicons.css';
import './assets/style/fonts.css';
import './assets/style/styles.css';
import './input.css';

Vue.use(UniqueId);

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount('#app');
