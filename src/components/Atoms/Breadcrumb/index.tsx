import { theme } from '@/styles/theme'
import Link from 'next/link'
import { changeColor, styles } from './styles'

type BreadcrumbProps = {
  title: string
  link: string
  isLast: boolean
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ title, link, isLast }) => {
  return (
    <div css={[styles.container, changeColor(isLast, theme)]}>
      <Link href={link} css={styles.link}>
        {title}
      </Link>
    </div>
  )
}

export default Breadcrumb
