import Article from '@/components/Templates/Article'
import TableOfContents from '@/components/Molecules/TableOfContents'
import { Contents } from '@/types/contents'
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
    <div css={styles.base}>
      <div css={styles.container}>
        <Article data={data} />
        {!isMobile && mounted && <TableOfContents />}
      </div>
    </div>
  )
}

export default DetailPage
