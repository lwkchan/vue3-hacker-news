<script lang="ts">
import { PropType } from '@vue/runtime-core';
import { Article } from '../types';

export default {
    props: { article: { type: Object as PropType<Article>, required: true } },
    setup(props: { article: Article }) {
        return { article: props.article, time: new Date(props.article.time * 1000) }
    },
};
</script>
<template>
    <div class="ArticleCard">
        <a :href="article.url">
            <h1>{{ article.title }}</h1>
        </a>
        <div class="ArticleCard__info">
            <p>Score: {{ article.score }}</p>
            <p>{{ article.by }}</p>
            <p>Comments: {{ article.descendants }}</p>
            <p>{{ time }}</p>
        </div>
    </div>
</template>
<style scoped>
.ArticleCard {
    text-align: left;
}
.ArticleCard h1 {
    font-size: 2rem;
    display: inline;
}
.ArticleCard__info {
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: 1rem;
    place-content: start;
}
.ArticleCard__info p {
    display: inline-block;
}
</style>
