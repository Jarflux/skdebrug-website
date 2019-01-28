import Vue from 'vue';
import Standings from './components/standings';

let App = Vue.extend(Standings);

new App().$mount("#mainContent");