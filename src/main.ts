import "./style.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import i18n from "@/assets/i18n/index";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(i18n);
app.use(router);

app.mount("#app");
