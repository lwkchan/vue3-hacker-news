import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import createArticlesPage from "./components/createArticlesPage"
import { ArticlesPageType } from "./types"


export const routes: RouteRecordRaw[] = [
    { path: '/', component: createArticlesPage(ArticlesPageType.Top) },
    { path: '/new', component: createArticlesPage(ArticlesPageType.New) },
]


export const router = createRouter({
    history: createWebHistory(),
    routes,
})
