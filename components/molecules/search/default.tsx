import Select from '../../atoms/select'
import Input from '../../atoms/input'
import SearchButton from '../../atoms/button/search-button'

type Props = {
  className?: string
}

const Search = ({ className = '' }: Props) => (
  <div className={`flex flex-row flex-wrap ${className}`}>
    <Select className="w-64" />
    <Input className="ml-5 w-64" />
    <SearchButton className="ml-5 w-24" />
  </div>
)

export default Search
