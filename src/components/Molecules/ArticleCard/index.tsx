import Category from '@/components/Atoms/Category'
import NextImage from '@/components/Atoms/NextImage'
import { Contents } from '@/types/contents'
import Link from 'next/link'
import React from 'react'
import { styles } from './styles'

type ArticleCardProps = {
  article: Contents
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <Link href={article.id}>
      <div css={styles.container}>
        <NextImage
          src={article.eyecatch.url}
          width={340}
          height={180}
          alt="アイキャッチ画像"
          radius={15}
        />
        <div css={styles.contentsContainer}>
          <h3 css={styles.title}>{article.title}</h3>
          <div css={styles.excerpt}>{article.excerpt}</div>
          <div css={styles.categoryContainer}>
            {article.category.map((category) => {
              return <Category key={category.id} category={category.name} />
            })}
          </div>
        </div>
      </div>
    </Link>
  )
}
export default ArticleCard
