import React from 'react'
import { styles } from './styles'
import ColumnIconPath from '../../../../assets/images/column-icon.png'
import NextImage from '@/components/Atoms/NextImage'
import Button from '@/components/Atoms/Button'
import { Contents } from '@/types/contents'
import ArticleCards from '@/components/Molecules/ArticleCards'

type ColumnProps = {
  articles: Contents[]
}

const Column: React.FC<ColumnProps> = ({ articles }) => {
  return (
    <div css={styles.base}>
      <div css={styles.container}>
        <div css={styles.titleContainer}>
          <NextImage
            src={ColumnIconPath}
            width={40}
            height={40}
            alt="本のアイコン"
          />
          <h2 css={styles.title}>New Column</h2>
        </div>
        <div css={styles.subTitle}>記事一覧</div>
        <ArticleCards articles={articles} length={6} />
        <Button text="記事一覧を見る" />
      </div>
    </div>
  )
}
export default Column
