import { Idol } from '../../types/idol'
import { Option } from '../../types/option'
import Header from '../organisms/header'
import Footer from '../organisms/footer'
import UI from '../organisms/ui'

type Props = {
  idols: Idol[]
  optionList: Option[]
}

const Home = (props: Props) => {
  return (
    <div className="flex flex-col mx-8 my-12">
      <Header />
      <UI {...props} />
      <Footer />
    </div>
  )
}

export default Home
