import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// Create Vuetify instance
const vuetify = createVuetify({
  components,
  directives,
});
// Mdi_Fonts
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

import "@mdi/font/css/materialdesignicons.css";


createApp(App).use(router).use(vuetify).mount("#app");
