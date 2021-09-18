import { createApp } from "vue";
import App from "./App.vue";
import "./assets/style.css";
import appButton from "../src/components/ui/subs/appButton.vue";
import appDetail from "../src/components/ui/subs/appDetail.vue";
import appLink from "../src/components/ui/subs/appLink.vue";
import appLinkBlue from "../src/components/ui/subs/appLinkBlue.vue";
import appLogo from "../src/components/ui/subs/appLogo.vue";
import appTitle from "../src/components/ui/subs/appTitle.vue";

const app = createApp(App);

app.component("appButton", appButton);
app.component("appDetail", appDetail);
app.component("appLink", appLink);
app.component("appLinkBlue", appLinkBlue);
app.component("appLogo", appLogo);
app.component("appTitle", appTitle);
app.mount("#app");
