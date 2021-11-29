import ArticlesList from './ArticlesList.vue'
import { Component, h } from 'vue'
import { ArticlesPageType } from '../types'


export default function createArticlesPage(type: ArticlesPageType): Component {
    return {
        name: `${type}-stories-view`,
        render() {
            return h(ArticlesList, { type })
        }
    }
}