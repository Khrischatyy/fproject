import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/main.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTools, faSink, faShower, faBed, faWarehouse, faHouseChimney, faMicrochip, faDoorClosed } from '@fortawesome/free-solid-svg-icons';

// Добавляем иконки в библиотеку
library.add(faTools, faSink, faShower, faBed, faWarehouse, faHouseChimney, faMicrochip, faDoorClosed);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(store).use(router).mount('#app');
