import { createApp } from "vue";
import "./style.css";
// 导入 App 组建
import App from "./App.vue";
// import FxButton from "@/components/examples/FxButton.vue";

// 开发环境下，Vue 会提供很多警告来帮你对付常见的错误与陷阱。而在生产环境下，这些警告语句却没有用，反而会增加应用的体积。
// 默认为 true，设置为 false 可以取消提示
// Vue.config.productionTip = true;

// 注册全局组件，所有组件内部都能使用
// Vue.components("FxButton", FxButton);

// 创建应用
createApp(App).mount("#app");
