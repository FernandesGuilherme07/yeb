import { createApp } from "vue";
import App from "./App.vue";
import router from "./routers";
import mitt from "mitt";

const emitter = mitt();
const app = createApp(App).use(router);
app.config.globalProperties.emitter = emitter;

app.mount("#app");
