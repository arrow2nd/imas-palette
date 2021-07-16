import Title from '../molecules/title'
import Search from '../molecules/search'

const Header = () => {
  return (
    <div>
      <Title />
      <Search className="mt-8" />
    </div>
  )
}

export default Header
