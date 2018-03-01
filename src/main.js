// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import LeitnerApp from './LeitnerApp'
import router from './router'
import axios from 'axios';

require('./style/app.scss');
require('../node_modules/bulma/bulma.sass');

window.axios = axios;

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: { LeitnerApp },
	template: '<LeitnerApp/>'
});
