import { Article } from "./types";

const getRandomNumber = () => Math.ceil(Math.random() * 1000000)

export const getMockArticleIds = (length: number) => Array.from({ length }, getRandomNumber);

export const getMockArticle = (): Article => {
    return {
        by: `someone-${getRandomNumber}`,
        descendants: getRandomNumber(),
        id: getRandomNumber(),
        kids: [getRandomNumber(), getRandomNumber(), getRandomNumber()],
        score: getRandomNumber(),
        time: Number(new Date(1234879999094)),
        title: `title=${getRandomNumber()}`,
        type: 'Some type',
        url: `http://www.article.com/${getRandomNumber()}`,
    }
}