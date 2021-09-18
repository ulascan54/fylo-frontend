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

app.component("Button", appButton);
app.component("Detail", appDetail);
app.component("Link", appLink);
app.component("LinkBlue", appLinkBlue);
app.component("Logo", appLogo);
app.component("Title", appTitle);

app.mount("#app");
