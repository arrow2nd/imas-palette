import { SeoInfoType } from '../../types/seo'
import SEO from '../organisms/seo'
import Header from '../organisms/header'
import Footer from '../organisms/footer'
import UI from '../organisms/ui'

type Props = {
  seo: SeoInfoType
}

const Home = ({ seo }: Props) => (
  <div className="flex flex-col mx-8 my-16 min-h-screen">
    <SEO {...seo} />
    <Header desc={seo.desc} />
    <UI />
    <Footer />
  </div>
)

export default Home
