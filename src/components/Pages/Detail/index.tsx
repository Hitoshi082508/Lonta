import Breadcrumbs from '@/components/Molecules/Breadcrumbs'
import Article from '@/components/Templates/Article'
import Sidebar from '@/components/Templates/Sidebar'
import { Contents } from '@/types/contents'
import { breadcrumbs } from '@/utils/breadcrumbs'
import { useRouter } from 'next/router'
import { styles } from './styles'

type DetailProps = {
  data: Contents
}

const DetailPage: React.FC<DetailProps> = ({ data }) => {
  return (
    <>
      {/* TODO: パンくずリストの各要素のリンクの取得方法を考える */}
      <Breadcrumbs
        breadcrumbs={breadcrumbs.concat(
          { title: 'Webデザイナーになりたい', link: useRouter().pathname },
          { title: 'Webデザイナーになりたい', link: useRouter().pathname },
        )}
      />
      <div css={styles.base}>
        <div css={styles.container}>
          <Article data={data} />
          <Sidebar />
        </div>
      </div>
    </>
  )
}

export default DetailPage
