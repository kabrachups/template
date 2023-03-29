// FILE: main.js

import {createApp} from 'vue'
import {Quasar} from 'quasar'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue'
import axios from "axios";
import {createPinia} from "pinia";
import router from "./router/router";

const app = createApp(App)

// http
axios.defaults.baseURL = 'https://api.pexels.com/v1/'
// TODO move it to env variable
axios.defaults.headers.common.Authorization = 'xJn8XZme8j8VIkyVx92abi7CWBet80XGuwlr9F1avctRskZAw8bGn8y1'

// state
const pinia = createPinia()
app.use(pinia)

// component framework
app.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
})
// routes
app.use(router)

// Assumes you have a <div id="app"></div> in your index.html
app.mount('#app')
