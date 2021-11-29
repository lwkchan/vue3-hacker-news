import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import createArticlesPage from "./components/createArticlesPage"


export const routes: RouteRecordRaw[] = [
    { path: '/', component: createArticlesPage('best') },
    { path: '/new', component: createArticlesPage('new') },
]


export const router = createRouter({
    history: createWebHistory(),
    routes,
})
