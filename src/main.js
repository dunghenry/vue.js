import {createApp} from 'vue';
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue';
import routes from './router'
import store from './store'
const app = createApp(App);
const router = createRouter({
    history: createWebHistory(),
    routes
})
app.use(router);
app.use(store);
app.mount('#app')