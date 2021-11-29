<script lang="ts">
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { onMounted, ref } from 'vue';
import SkeletonLoader from '../components/SkeletonLoader.vue';
import ArticleCard from '../components/ArticleCard.vue';
import { Article, ArticlesPageType } from '../types';
import api from '../api';

const ARTICLES_COUNT = 30;
const LoadingState = {
    FETCHING: 'FETCHING',
    READY: 'READY',
};


export default {
    props: { type: ArticlesPageType },
    components: {
        SkeletonLoader,
        ArticleCard,
    },
    setup(props) {
        const articles = ref<Article[]>([]);
        const currentLoadingState = ref(LoadingState.FETCHING);

        onMounted(() => {
            api.getStories(props.type).then((articleIds) => {
                articles.value = articleIds;
                currentLoadingState.value = LoadingState.READY;
            });
        });

        return {
            articles,
            currentLoadingState,
            ARTICLES_COUNT,
            LoadingState,
        };
    },
};
</script>
<template>
    <div v-if="currentLoadingState === LoadingState.FETCHING" class="list">
        <SkeletonLoader v-for="index in ARTICLES_COUNT" :key="index" :height="60" />
    </div>
    <ul role="list" class="list" v-else>
        <li v-for="article in articles" :key="article.id">
            <ArticleCard :article="article" />
        </li>
    </ul>
</template>