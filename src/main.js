import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/main.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import {
    faBolt,             // Electrical
    faRulerCombined,
    faFaucetDrip,
    faPaintRoller,      // Painting
    faThLarge,         // Tile Jobs
    faCubes,           // Lumber (better representation)
    faBox,             // Kitchen Cabinets
    faBorderAll,       // Countertops
    faFan,             // HVAC/Ventilation
    faTh,              // Floor Installation
    faBrush,           // Wood Restoration
    faTools,           // Handyman Services
    faLayerGroup       // Drywall Installation
} from "@fortawesome/free-solid-svg-icons";

library.add(faBolt, faRulerCombined, faFaucetDrip, faPaintRoller, faThLarge, faCubes, faBox, faBorderAll, faFan, faTh, faBrush, faTools, faLayerGroup);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(store).use(router).mount('#app');
