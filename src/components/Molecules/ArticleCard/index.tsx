import { Contents } from '@/types/contents'
import Image from 'next/legacy/image'
import { styles } from './styles'
import Link from 'next/link'

type ArticleCardProps = {
  data: Contents
}

const ArticleCard: React.FC<ArticleCardProps> = ({ data }) => {
  return (
    <Link href={data.id} css={styles.container}>
      <div css={styles.eyecatchContainer}>
        <Image
          src={data.eyecatch.url}
          layout="fill"
          alt="アイキャッチ画像"
          css={styles.eyecatch}
        />
      </div>
      <div css={styles.textContainer}>
        <h2 css={styles.title}>{data.title}</h2>
        <p css={styles.excerpt}>{data.excerpt}</p>
        <div css={styles.categoryContainer}>
          {data.category.map((category, index) => {
            return (
              <p key={index} css={styles.category}>
                {`#${category.name}`}
              </p>
            )
          })}
        </div>
      </div>
    </Link>
  )
}

export default ArticleCard
