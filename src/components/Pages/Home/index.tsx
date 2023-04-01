import Introduction from '@/components/Templates/Introduction'
import Contact from '@/components/Templates/Contact'
import JobList from '@/components/Templates/JobList'
import Member from '@/components/Templates/Member'
import Top from '@/components/Templates/Top'
import Voice from '@/components/Templates/Voice'
import About from '@/components/Templates/About'
import { theme } from '@/styles/theme'
import { Contents } from '@/types/contents'

type HomePageProps = {
  data: Contents[]
}

const HomePage: React.FC<HomePageProps> = ({ data }) => {
  return (
    <>
      <Top data={data} />
      <Introduction />
      <JobList
        title="Category"
        subTitle="なりたい像から自分に合った職を見つけよう"
        backgroundColor={theme.color.main}
        fontColor={theme.color.white}
      />
      <Voice />
      <Member />
      <Contact />
      <About />
    </>
  )
}

export default HomePage
