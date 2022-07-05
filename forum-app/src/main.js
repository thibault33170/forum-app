import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import { router } from "@/router/index.js";
import "bootstrap/dist/css/bootstrap.css";

const pinia = createPinia();

createApp(App).use(router).use(pinia).mount("#app");
