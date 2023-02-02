import { Contents } from '@/types/contents'
import React from 'react'
import ArticleCard from '@/components/Molecules/ArticleCard'
import { styles } from './styles'

type ArticleCardsProps = {
  articles: Contents[]
  length: number
}

const ArticleCards: React.FC<ArticleCardsProps> = ({ articles, length }) => {
  return (
    <div css={styles.container}>
      {articles.slice(0, length).map((article) => {
        return <ArticleCard key={article.id} article={article} />
      })}
    </div>
  )
}
export default ArticleCards
