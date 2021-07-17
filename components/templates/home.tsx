import Header from '../organisms/header'
import Cards from '../organisms/cards'
import Footer from '../organisms/footer'

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen m-10">
      <Header />
      <div className="flex-1">
        <Cards />
      </div>
      <Footer />
    </div>
  )
}

export default Home
