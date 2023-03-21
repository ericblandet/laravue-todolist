import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlusSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
library.add(faPlusSquare, faTrash);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
