import { Props } from './props'
import Select from '../../atoms/select'
import Input from '../../atoms/input'
import Button from '../../atoms/button'

const Search = ({ className = '', options }: Props) => (
  <div className={`flex flex-col flex-wrap w-full items-center ${className}`}>
    <Select className="w-full">{options}</Select>
    <Input className="mt-3 w-full" />
    <Button className="mt-3 w-full">検索</Button>
  </div>
)

export default Search
