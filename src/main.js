import Vue, { createApp, h } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import UniqueId from 'vue-unique-id';

import './assets/coolicons/coolicons.css';
import './assets/style/fonts.css';
import './assets/style/styles.css';
import './input.css';

Vue.use(UniqueId);

createApp({
  vuetify,
  render: () => h(App),
}).mount('#app');
