import Breadcrumb from '@/components/Atoms/Breadcrumb'
import { styles } from './styles'

type BreadcrumbListProps = {
  breadcrumbs: {
    title: string
    link: string
  }[]
}

const Breadcrumbs: React.FC<BreadcrumbListProps> = ({ breadcrumbs }) => {
  return (
    <nav aria-label="breadcrumb">
      <ul css={styles.container}>
        {breadcrumbs.map((breadcrumb, index) => {
          const isLast = index === breadcrumbs.length - 1
          return (
            <Breadcrumb
              key={breadcrumb.link}
              title={breadcrumb.title}
              link={breadcrumb.link}
              isLast={isLast}
            />
          )
        })}
      </ul>
    </nav>
  )
}

export default Breadcrumbs
