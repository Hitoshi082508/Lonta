import Link from 'next/link'
import { styles } from './styles'

type BreadcrumbProps = {
  title: string
  link: string
  isLast: boolean
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ title, link, isLast }) => {
  return (
    <div css={styles.container}>
      <Link href={link} css={styles.link}>
        {title}
      </Link>
    </div>
  )
}

export default Breadcrumb
