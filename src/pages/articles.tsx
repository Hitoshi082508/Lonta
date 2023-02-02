import ArticlesPage from '@/components/Pages/Articles'
import { client } from '@/lib/client'
import { Content, Contents } from '@/types/contents'

export const getStaticProps = async () => {
  const articles: Content = await client.get({ endpoint: 'blogs' })

  return {
    props: {
      articles: articles.contents,
    },
  }
}

type Props = {
  articles: Contents[]
}

const Articles: React.FC<Props> = ({ articles }) => {
  return <ArticlesPage articles={articles} />
}

export default Articles
