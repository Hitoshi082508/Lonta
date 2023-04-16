import Breadcrumbs from '@/components/Molecules/Breadcrumbs'
import Article from '@/components/Templates/Article'
import TableOfContents from '@/components/Molecules/TableOfContents'
import { Contents } from '@/types/contents'
import { breadcrumbs } from '@/utils/breadcrumbs'
import { useRouter } from 'next/router'
import { styles } from './styles'
import { isMobile } from 'react-device-detect'
import { useEffect, useState } from 'react'

type DetailProps = {
  data: Contents
}

const DetailPage: React.FC<DetailProps> = ({ data }) => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  })
  return (
    <>
      {/* TODO: パンくずリストの各要素のリンクの取得方法を考える */}
      <Breadcrumbs
        breadcrumbs={breadcrumbs.concat(
          { title: 'Webデザイナーになりたい', link: '' },
          { title: data.title, link: useRouter().pathname },
        )}
      />
      <div css={styles.base}>
        <div css={styles.container}>
          <Article data={data} />
          {!isMobile && mounted && <TableOfContents />}
        </div>
      </div>
    </>
  )
}

export default DetailPage
