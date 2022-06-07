import { createApp } from "vue";
import Store from "./store/store.js";
import App from "./App.vue";

createApp(App).use(Store).mount("#app");
