import NextImage from '@/components/Atoms/NextImage'
import Spacer from '@/components/Atoms/Spacer'
import ArticleCards from '@/components/Molecules/ArticleCards'
import { Contents } from '@/types/contents'
import React from 'react'
import BookIconImagePath from '../../../../assets/images/book-icon.png'
import { styles } from './styles'

type ArticlesPageProps = {
  articles: Contents[]
}

const ArticlesPage: React.FC<ArticlesPageProps> = ({ articles }) => {
  return (
    <div css={styles.base}>
      <div css={styles.container}>
        <div css={styles.titleContainer}>
          <NextImage
            src={BookIconImagePath}
            width={30}
            height={30}
            alt="本のアイコン"
          />
          <h1 css={styles.title}>記事一覧</h1>
        </div>
        <ArticleCards articles={articles} length={7} />
        <Spacer direction="vertical" spacing={150} />
      </div>
    </div>
  )
}
export default ArticlesPage
