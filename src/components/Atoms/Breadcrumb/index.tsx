import Link from 'next/link'
import { styles } from './styles'

type BreadcrumbProps = {
  title: string
  link: string
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ title, link }) => {
  return (
    <div css={styles.container}>
      <Link href={link} css={styles.link}>
        {title}
      </Link>
    </div>
  )
}

export default Breadcrumb
