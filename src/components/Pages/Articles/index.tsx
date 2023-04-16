import ArticleCard from '@/components/Molecules/ArticleCard'
import NextImage from '@/components/Atoms/NextImage'
import articleIcon from '../../../../assets/images/article-icon.png'
import { Contents } from '@/types/contents'
import { styles } from './styles'

type DetailProps = {
  data: Contents[]
}

const DetailPage: React.FC<DetailProps> = ({ data }) => {
  return (
    <div css={styles.base}>
      <div css={styles.title}>
        <NextImage
          src={articleIcon}
          width={31}
          height={31}
          alt="記事一覧のアイコン"
        />
        <h1>記事一覧</h1>
      </div>
      <div css={styles.container}>
        {data.map((item) => {
          return <ArticleCard key={item.id} data={item} />
        })}
      </div>
    </div>
  )
}

export default DetailPage
