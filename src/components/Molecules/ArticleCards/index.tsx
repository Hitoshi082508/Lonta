import { Contents } from '@/types/contents'
import React, { useEffect, useState } from 'react'
import ArticleCard from '@/components/Molecules/ArticleCard'
import { styles } from './styles'

type ArticleCardsProps = {
  articles: Contents[]
  length: number
}

const ArticleCards: React.FC<ArticleCardsProps> = ({ articles, length }) => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  })
  return (
    <div css={styles.container}>
      {mounted &&
        articles.slice(0, length).map((article) => {
          return <ArticleCard key={article.id} article={article} />
        })}
    </div>
  )
}
export default ArticleCards
