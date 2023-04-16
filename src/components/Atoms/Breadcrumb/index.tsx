import { theme } from '@/styles/theme'
import Link from 'next/link'
import {
  changeColor,
  changePadding,
  changeTriangleColor,
  styles,
} from './styles'

type BreadcrumbProps = {
  title: string
  link: string
  isFirst: boolean
  isLast: boolean
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  title,
  link,
  isFirst,
  isLast,
}) => {
  return (
    <li
      css={[
        styles.container,
        changeColor(isLast, theme),
        changePadding(isFirst),
      ]}
    >
      <Link href={link} css={styles.link}>
        {title}
      </Link>
      <div css={styles.outerTriangle} />
      <div css={[styles.innerTriangle, changeTriangleColor(isLast, theme)]} />
    </li>
  )
}

export default Breadcrumb
