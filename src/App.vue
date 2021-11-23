<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { onMounted, ref } from 'vue';
import createApi from './api';
import SkeletonLoader from './components/SkeletonLoader.vue';
import ArticleCard from './components/ArticleCard.vue';

const ARTICLES_COUNT = 30;
const LoadingState = {
  FETCHING: 'FETCHING',
  READY: 'READY',
};

export default {
  props: { height: Number },
  components: {
    SkeletonLoader,
    ArticleCard,
  },
  setup() {
    const api = createApi();
    const articles = ref([]);
    const currentLoadingState = ref(LoadingState.FETCHING);

    onMounted(() => {
      api.getTopStories().then((articleIds) => {
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
  <div class="container">
    <div class="header">
      <h1>Hacker news clone</h1>
    </div>
    <div v-if="currentLoadingState === LoadingState.FETCHING" class="list">
      <SkeletonLoader v-for="index in ARTICLES_COUNT" :key="index" :height="60" />
    </div>
    <ul role="list" class="list" v-else>
      <li v-for="article in articles">
        <ArticleCard :article="article" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.container {
  max-width: 80rem;
  margin: 0 auto;
  display: grid;
  row-gap: 1rem;
}

.list {
  display: grid;
  row-gap: 2rem;
}

.header {
  display: flex;
  background-color: var(--colorThemePrimary);
  padding: 10px;
  font-size: 1rem;
}
</style>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
}

html {
  font-size: 16px;
  color: var(--colorFontPrimary);
}
</style>
