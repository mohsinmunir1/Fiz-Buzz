require('./bootstrap');

import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios, axios);

Vue.component('test-component', require('./components/TestComponent.vue').default);

const app = new Vue().$mount('#app');
