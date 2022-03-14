import Footer from 'components/organisms/footer'
import Header from 'components/organisms/header'
import SEO from 'components/organisms/seo'
import UI from 'components/organisms/ui'

import { Seo } from 'types/seo'

type Props = {
  seo: Seo
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
