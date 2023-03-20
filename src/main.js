import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import './assets/css/main.css'
import router from "./router";
// Nucleo Icons
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap-icons/font/bootstrap-icons.css'
// Since every component imports their Bootstrap functionality,
// the following line is not necessary:
// import 'bootstrap'
import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import materialKit from "./material-kit";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


const app = createApp(App);
app.use(VueViewer)
app.use(ElementPlus);
app.use(createPinia());
app.use(router);
app.use(BootstrapVue3)
app.use(materialKit);
app.mount("#app");
app.use(VueViewer)
