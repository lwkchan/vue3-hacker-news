import { Article } from '../types'
import ArticleCard from './ArticleCard.vue'
import { render } from '@testing-library/vue'

interface Props {
    article: Article
}

function renderArticleCard(props: Props) {
    return render(ArticleCard, { props })
}

describe('ArticleCard', () => {
    it('displays the contents of the provided article', () => {
        // renderArticleCard({
        //     article: {
        //         by: 'someone',
        //         descendants: 100,
        //         id: 1049,
        //         kids: [12, 123, 4, 324, 22, 3, 5],
        //         score: 10,
        //         time: Number(Date.now()),
        //         title: 'Title',
        //         type: 'Some type',
        //         url: 'http://www.article.com',
        //     }
        // })
    })
})