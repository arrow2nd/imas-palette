import Select from '../../atoms/select'
import Input from '../../atoms/input'
import Button from '../../atoms/button'

type Props = {
  className?: string
}

const Search = ({ className = '' }: Props) => (
  <div className={`flex flex-col flex-wrap w-full items-center ${className}`}>
    <Select className="w-full" />
    <Input className="mt-3 w-full" />
    <Button className="mt-3 w-full">検索</Button>
  </div>
)

export default Search
