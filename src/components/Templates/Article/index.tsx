import Category from '@/components/Atoms/Category'
import { Contents } from '@/types/contents'
import { styles } from './styles'
import { cdate } from 'cdate'
import NextImage from '@/components/Atoms/NextImage'
import TableOfContents from '@/components/Molecules/TableOfContents'
import { isMobile } from 'react-device-detect'
import { useEffect, useState } from 'react'

type ArticleProps = {
  data: Contents
}

const Article: React.FC<ArticleProps> = ({ data }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  })

  const contents = data.content
    .map((item) => item.richEditor + item.html)
    .reduce((acc, cur) => acc + cur)

  const createMarkup = () => {
    return { __html: contents }
  }
  return (
    <article css={styles.container} className="body">
      <h1 css={styles.title}>{data.title}</h1>
      <div css={styles.categoryContainer}>
        {data.category.map((item) => {
          return <Category key={item.id} category={item.name} />
        })}
      </div>
      <div css={styles.updatedAt}>
        更新日：<time>{cdate(data.updatedAt).format('YYYY/MM/DD')}</time>
      </div>
      <NextImage
        src={data.eyecatch.url}
        width={780}
        height={420}
        percentWidth={100}
        radius={15}
        alt={data.eyecatchAlt}
      />
      {isMobile && mounted && <TableOfContents />}
      <div css={styles.article} dangerouslySetInnerHTML={createMarkup()} />
    </article>
  )
}

export default Article
