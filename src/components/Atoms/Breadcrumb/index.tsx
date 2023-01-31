import { theme } from '@/styles/theme'
import Link from 'next/link'
import { changeContainerColor, changeTriangleColor, styles } from './styles'

type BreadcrumbProps = {
  title: string
  link: string
  isLast: boolean
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ title, link, isLast }) => {
  return (
    <li css={[styles.container, changeContainerColor(isLast, theme)]}>
      <Link href={link} css={styles.link}>
        {title}
      </Link>
      <div css={styles.outerTriangle} />
      <div css={[styles.innerTriangle, changeTriangleColor(isLast, theme)]} />
    </li>
  )
}

export default Breadcrumb
