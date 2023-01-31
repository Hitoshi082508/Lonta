import Breadcrumbs from '@/components/Molecules/Breadcrumbs'
import About from '@/components/Templates/About'
import Contact from '@/components/Templates/Contact'
import JobList from '@/components/Templates/JobList'
import Member from '@/components/Templates/Member'
import Top from '@/components/Templates/Top'
import Voice from '@/components/Templates/Voice'
import { theme } from '@/styles/theme'
import { Contents } from '@/types/contents'

type HomePageProps = {
  data: Contents[]
}

const dummyBreadcrumbs = [
  { title: 'トップ', link: '/' },
  { title: 'Webデザイナーになりたい', link: '/designer' },
  { title: 'UI/UXデザイナー', link: '/designer' },
]

const HomePage: React.FC<HomePageProps> = ({ data }) => {
  return (
    <>
      <Breadcrumbs breadcrumbs={dummyBreadcrumbs.slice(0, 1)} />
      <Breadcrumbs breadcrumbs={dummyBreadcrumbs.slice(0, 2)} />
      <Breadcrumbs breadcrumbs={dummyBreadcrumbs} />
      <Top data={data} />
      <About />
      <JobList
        title="Category"
        subTitle="なりたい像から自分に合った職を見つけよう"
        backgroundColor={theme.color.main}
        fontColor={theme.color.white}
      />
      <Voice />
      <Member />
      <Contact />
    </>
  )
}

export default HomePage
