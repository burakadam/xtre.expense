import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#0037FF',
        secondary: '#000',
        white: '#fff',
      },
    },
  },
});

export default vuetify;
