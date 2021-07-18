import { Props } from './props'
import Select from '../../atoms/select'
import Input from '../../atoms/input'
import Button from '../../atoms/button'

const Search = ({ className = '', options }: Props) => (
  <div className={`flex flex-row flex-wrap ${className}`}>
    <Select className="w-64">{options}</Select>
    <Input className="ml-5 w-64" />
    <Button className="ml-5 w-24">検索</Button>
  </div>
)

export default Search
