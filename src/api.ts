import { Article, ArticlesPageType } from "./types";

const BASE_PATH = 'https://hacker-news.firebaseio.com/v0';


const fetchData = async (path: string) => {
  try {
    const response = await fetch(`${BASE_PATH}${path}`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log('e:', e)
  }
};

const createApi = () => {
  const getStories = async (type: ArticlesPageType, numberOfEntries: number = 30): Promise<Article[]> => {
    const ids = await fetchData(`/${type}.json`);
    const articles: Article[] = await Promise.all(
      ids.slice(0, numberOfEntries).map((id: string) => fetchData(`/item/${id}.json`))
    )

    return articles;
  };

  return {
    getStories,
  };
};

const api = createApi()

export default api;
