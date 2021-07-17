import Select from '../../atoms/select'
import Input from '../../atoms/input'
import SearchButton from '../../atoms/button/search-button'

type Props = {
  className?: string
}

const Search = ({ className = '' }: Props) => (
  <div className={`flex flex-col flex-wrap w-full items-center ${className}`}>
    <Select className="w-full" />
    <Input className="mt-3 w-full" />
    <SearchButton className="mt-3 w-full" />
  </div>
)

export default Search
