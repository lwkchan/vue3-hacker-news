import { Article } from '../types'
import ArticleCard from './ArticleCard.vue'
import { render, screen } from '@testing-library/vue'

interface Props {
    article: Article
}

function renderArticleCard(props: Props) {
    return render(ArticleCard, { props })
}
describe('ArticleCard', () => {
    const article = {
        by: 'someone',
        descendants: 100,
        id: 1049,
        kids: [12, 123, 4, 324, 22, 3, 5],
        score: 10,
        time: Number(new Date(1234879999094)),
        title: 'Title',
        type: 'Some type',
        url: 'http://www.article.com/',
    }
    beforeEach(() => {
        renderArticleCard({
            article
        })
    })
    it('displays the contents of the provided article', () => {
        screen.getByRole('heading', { name: article.title })
        screen.getByText(`Score: ${article.score}`)
        screen.getByText(`Comments: ${article.descendants}`)
        screen.getByText(`${new Date(article.time * 1000)}`)
    })
    it('displays the article link', () => {
        expect(screen.getByRole('link', { name: article.title })).toHaveProperty('href', article.url)
    })
})