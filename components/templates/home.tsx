import Header from '../organisms/header'
import Footer from '../organisms/footer'

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen m-6">
      <Header />
      <div className="flex-1 mt-6">main!</div>
      <Footer />
    </div>
  )
}

export default Home
