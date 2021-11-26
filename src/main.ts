import { createApp } from 'vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import App from './App.vue'
import createArticlesPage from './components/createArticlesPage'

const routes: RouteRecordRaw[] = [
    { path: '/', component: createArticlesPage('best') },
    { path: '/new', component: createArticlesPage('new') },
]


const router = createRouter({
    history: createWebHistory(),
    routes,
})


const app = createApp(App)


app.use(router)

app.mount('#app')
