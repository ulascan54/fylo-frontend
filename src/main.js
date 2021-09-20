import { createApp } from "vue";
import App from "./App.vue";
import "./assets/style.css";
import "animate.css"
import router from './router/index.js'

import appButton from "../src/components/ui/subs/appButton.vue";
import appDetail from "../src/components/ui/subs/appDetail.vue";
import appLink from "../src/components/ui/subs/appLink.vue";
import appLinkBlue from "../src/components/ui/subs/appLinkBlue.vue";
import appLogo from "../src/components/ui/subs/appLogo.vue";
import appTitle from "../src/components/ui/subs/appTitle.vue";

import appHeader from "./components/ui/Header/index.vue";
import appFooter from "./components/ui/Footer/index.vue";
import appAvatar from "./components/ui/Avatar/index.vue";

const app = createApp(App);

app.use(router)

app.component("Button", appButton);
app.component("Detail", appDetail);
app.component("Link", appLink);
app.component("LinkBlue", appLinkBlue);
app.component("Logo", appLogo);
app.component("Title", appTitle);
app.component("Header", appHeader);
app.component("Avatar", appAvatar);
app.component("Footer", appFooter);

app.mount("#app");
