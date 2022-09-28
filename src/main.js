import { createApp } from "vue";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import router from "./router";
import pinia from "./store";

import App from "./App.vue";
import "./assets/styles/index.scss";

const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(Toast);

app.mount("#app");
