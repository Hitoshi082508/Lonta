import Link from 'next/link'

type BreadcrumbProps = {
  title: string
  link: string
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ title, link }) => {
  return <Link href={link}>{title}</Link>
}

export default Breadcrumb
