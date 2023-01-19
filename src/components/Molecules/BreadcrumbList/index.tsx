import Breadcrumb from '@/components/Atoms/Breadcrumb'
import { styles } from './styles'

type BreadcrumbListProps = {
  breadcrumbs: {
    title: string
    link: string
  }[]
}

const BreadcrumbList: React.FC<BreadcrumbListProps> = ({ breadcrumbs }) => {
  return (
    <div css={styles.container}>
      {breadcrumbs.map((breadcrumb, index) => {
        const isLast = index === breadcrumbs.length - 1
        return (
          <Breadcrumb
            key={breadcrumb.link}
            title={breadcrumb.title}
            link={breadcrumb.link}
            isLast={isLast}
          ></Breadcrumb>
        )
      })}
    </div>
  )
}

export default BreadcrumbList
