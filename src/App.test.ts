import { render, screen } from '@testing-library/vue';
import fetchMock from 'jest-fetch-mock'
import { getMockArticle, getMockArticleIds } from './api.mock';
import App from './App.vue';
import { Article } from './types';


function renderApp() {
    return render(App, {})
}

describe('App', () => {


    it('displays the correct number of loading spinners on load', () => {
        fetchMock.mockResponse('[]')
        renderApp()

        const skeletonLoaders = screen.getAllByTestId("SkeletonLoader")
        expect(skeletonLoaders).toHaveLength(30)
    });

    describe('when the articles requests are successful', () => {
        let articles: Article[] = []

        beforeAll(() => {
            fetchMock.mockResponse((config) => {
                return new Promise((resolve, reject) => {
                    if (config.url.match(/\/v0\/topstories.json/)) {
                        return resolve(JSON.stringify(getMockArticleIds(30)))
                    }
                    if (config.url.match(/\/v0\/item\/\d+.json/)) {
                        const article = getMockArticle()
                        articles.push(article)
                        return resolve(JSON.stringify(article))
                    }
                })
            })
        })

        it('displays the articles', () => {
            renderApp()

            articles.forEach((article) => {
                screen.getByText(article.title)
            })
        })
    })

});
