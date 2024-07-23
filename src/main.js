import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import { ElMessage } from 'element-plus'
import router from './router/index'
import "element-plus/theme-chalk/index.css";
import './style.css'
import App from './App.vue'

const app = createApp(App);
app.use(ElementPlus);
app.config.globalProperties.msg = 'hello';

app.use(router).mount('#app')
