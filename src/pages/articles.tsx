import ArticlesPage from '@/components/Pages/Articles'

import { client } from '@/lib/client'
import { Content, Contents } from '@/types/contents'

export const getStaticProps = async () => {
  const data: Content = await client.get({ endpoint: 'blogs' })

  return {
    props: {
      data: data.contents,
    },
  }
}

type Props = {
  data: Contents[]
}

const Articles: React.FC<Props> = ({ data }) => {
  return <ArticlesPage data={data} />
}

export default Articles
