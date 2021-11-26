import ArticlesList from './ArticlesList.vue'
import { Component, h } from 'vue'


export default function createArticlesPage(type: string): Component {
    return {
        name: `${type}-stories-view`,
        render() {
            return h(ArticlesList, { type })
        }
    }
}