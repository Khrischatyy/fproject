import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/main.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
    faBolt,             // Electrical
    faWrench,           // Plumbing
    faPaintRoller,      // Painting
    faThLarge,         // Tile Jobs
    faTree,             // Lumber
    faBoxOpen,          // Kitchen Cabinets
    faLayerGroup,       // Countertops
    faFan,              // HVAC/Ventilation
    faRulerCombined,    // Floor Installation
    faHammer,           // Wood Restoration
    faTools,            // Handyman Services
    faAlignLeft         // Drywall Installation
} from '@fortawesome/free-solid-svg-icons';

// Добавляем иконки в библиотеку
library.add(
    faBolt, faWrench, faPaintRoller, faThLarge, faTree, faBoxOpen, faLayerGroup,
    faFan, faRulerCombined, faHammer, faTools, faAlignLeft
);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(store).use(router).mount('#app');
