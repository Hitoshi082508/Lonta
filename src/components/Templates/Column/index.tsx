import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import ColumnIconPath from '../../../../assets/images/column-icon.png'
import NextImage from '@/components/Atoms/NextImage'
import Button from '@/components/Atoms/Button'
import { Contents } from '@/types/contents'
import ArticleCard from '@/components/Molecules/ArticleCard'
import { isMobile } from 'react-device-detect'

type ColumnProps = {
  articles: Contents[]
}

const Column: React.FC<ColumnProps> = ({ articles }) => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  })
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
        <div css={styles.articleContainer}>
          {mounted &&
            articles.slice(0, isMobile ? 3 : 6).map((article) => {
              return <ArticleCard key={article.id} article={article} />
            })}
        </div>
        <Button text="記事一覧を見る" />
      </div>
    </div>
  )
}
export default Column