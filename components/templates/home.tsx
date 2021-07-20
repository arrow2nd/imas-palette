import { SeoInfo } from '../../types/seo'
import { Option } from '../../types/option'
import SEO from '../organisms/seo'
import Header from '../organisms/header'
import Footer from '../organisms/footer'
import UI from '../organisms/ui'

type Props = {
  seo: SeoInfo
  optionList: Option[]
}

const Home = ({ seo, optionList }: Props) => {
  return (
    <div className="flex flex-col mx-8 my-12 min-h-screen">
      <SEO {...seo} />
      <Header desc={seo.desc} />
      <UI optionList={optionList} />
      <Footer />
    </div>
  )
}

export default Home
