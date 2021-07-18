import Select from '../../atoms/select'
import Input from '../../atoms/input'
import Button from '../../atoms/button'

type Props = {
  className?: string
}

const Search = ({ className = '' }: Props) => (
  <div className={`flex flex-row flex-wrap ${className}`}>
    <Select className="w-64" />
    <Input className="ml-5 w-64" />
    <Button className="ml-5 w-24">検索</Button>
  </div>
)

export default Search
