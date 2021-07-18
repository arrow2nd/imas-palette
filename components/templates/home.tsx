import Header from '../organisms/header'
import Cards from '../organisms/cards'
import Footer from '../organisms/footer'

type Props = {
  isTouchable: boolean
}

const Home = ({ isTouchable }: Props) => {
  return (
    <div className="flex flex-col mx-8 my-12">
      <Header />
      <Cards isTouchable={isTouchable} />
      <Footer />
    </div>
  )
}

export default Home
