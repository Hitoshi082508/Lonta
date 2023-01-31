import { styles } from './styles'
import { useEffect } from 'react'
import tocbot from 'tocbot'

const TableOfContents: React.FC = () => {
  useEffect(() => {
    tocbot.init({
      tocSelector: '.toc',
      contentSelector: '.body',
      headingSelector: 'h2, h3',
    })

    return () => tocbot.destroy()
  }, [])
  return (
    <div css={[styles.container]}>
      <div css={styles.tableOfContentsTitle}>目次</div>
      <nav className="toc" css={styles.tableOfContents}></nav>
    </div>
  )
}

export default TableOfContents
