import { Article } from "./types";

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
  const getTopStories = async (numberOfEntries: number = 30): Promise<Article[]> => {
    const ids = await fetchData(`/topstories.json`);
    const articles: Article[] = await Promise.all(
      ids.slice(0, numberOfEntries).map((id: string) => fetchData(`/item/${id}.json`))
    )

    return articles;
  };

  return {
    getTopStories,
  };
};

export default createApi;
