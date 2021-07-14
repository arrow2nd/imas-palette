import Select from '../atoms/select'
import Input from '../atoms/input'
import SearchButton from '../atoms/button/search-button'

type Props = {
  className?: string
}

const Search = ({ className = '' }: Props) => (
  <div className={`flex flex-row ${className}`}>
    <Select />
    <Input className="ml-5" />
    <SearchButton className="ml-5" />
  </div>
)

export default Search
