import { Contents } from '@/types/contents'
import Image from 'next/legacy/image'
import { styles } from './styles'

type ArticleCardProps = {
  data: Contents
}

const ArticleCard: React.FC<ArticleCardProps> = ({ data }) => {
  return <div>{data.title}</div>
}

export default ArticleCard
