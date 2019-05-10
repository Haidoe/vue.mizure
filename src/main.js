import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import './assets/scss/custom.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowRight, faArrowCircleDown, faUser, faEnvelope, faPencilAlt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitter, faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'

window.$ = window.jQuery = require('jquery');

library.add(faArrowRight, faArrowCircleDown, faFacebookSquare, faTwitter, faInstagram, faUser, faEnvelope, faPencilAlt);

Vue.use(BootstrapVue);

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
