<script lang="ts">
import { PropType } from '@vue/runtime-core';
import { Article } from '../types';

export default {
    props: { article: { type: Object as PropType<Article>, required: true } },
    setup({ article }: { article: Article }) {
        return {
            article: article,
            time: new Date(article.time * 1000),
            href: article.url ?? `https://news.ycombinator.com/item?id=${article.id}`, // TODO: update with in-house comment page when ready
        };
    },
};
</script>
<template>
    <div class="ArticleCard">
        <a :href="href">
            <h2>{{ article.title }}</h2>
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
.ArticleCard h2 {
    font-size: 2rem;
    display: inline;
}

.ArticleCard a:visited {
    color: var(--colorFontSecondary);
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
