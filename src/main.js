import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from './router/index'
import "element-plus/theme-chalk/index.css";
import './style.css'
import App from './App.vue'

const app = createApp(App);
app.use(ElementPlus);
app.config.globalProperties.msg = 'hello';

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router).mount('#app')
