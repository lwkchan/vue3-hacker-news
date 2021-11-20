<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { onMounted, ref } from 'vue';
import createApi from './api';
import SkeletonLoader from './components/SkeletonLoader.vue'
import ArticleCard from './components/ArticleCard.vue';

const ARTICLES_COUNT = 30
const LoadingState = {
  FETCHING: 'FETCHING',
  READY: 'READY'
}

export default {
  components: {
    SkeletonLoader,
    ArticleCard
  },
  setup() {
    const api = createApi()
    const articles = ref([])
    const currentLoadingState = ref(LoadingState.FETCHING)

    onMounted(() => {
      api.getTopStories().then((articleIds) => {
        articles.value = articleIds
        currentLoadingState.value = LoadingState.READY
      })
    })

    return { articles, currentLoadingState, ARTICLES_COUNT, LoadingState }
  },
};
</script>

<template>
  <div class="container">
    <div v-if="currentLoadingState === LoadingState.FETCHING" class="gridList">
      <SkeletonLoader v-for="index in ARTICLES_COUNT" :key="index" />
    </div>
    <ul role="list" class="gridList" v-else>
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
}

.gridList {
  display: grid;
  row-gap: 2rem;
}
</style>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

html {
  font-size: 16px;
}
</style>
