import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import ui from "@nuxt/ui/vue-plugin";
import "./assets/css/main.css";
import { createPinia } from "pinia";
import { socketClient } from "./socket";

const app = createApp(App);

const router = createRouter({
  routes: [
    { path: "/", component: () => import("./views/Home.vue") },
    { path: "/monitor", component: () => import("./views/SystemMonitor.vue") },
  ],
  history: createWebHistory(),
});
const pinia = createPinia();

app.use(router);
app.use(ui);
app.use(pinia);

app.mount("#app");

socketClient.connect();
