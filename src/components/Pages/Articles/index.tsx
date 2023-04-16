import ArticleCard from '@/components/Molecules/ArticleCard'

import { Contents } from '@/types/contents'
import { styles } from './styles'

type DetailProps = {
  data: Contents[]
}

const DetailPage: React.FC<DetailProps> = ({ data }) => {
  return (
    <div css={styles.base}>
      <h1>記事一覧</h1>
      <div css={styles.container}>
        {data.map((item) => {
          return <ArticleCard key={item.id} data={item} />
        })}
      </div>
    </div>
  )
}

export default DetailPage
