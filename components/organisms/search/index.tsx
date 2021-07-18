import { useRef } from 'react'
import { Props } from './props'
import Select from '../../atoms/select'
import Input from '../../atoms/input'
import Button from '../../atoms/button'

const Search = ({ className = '', options, isMobile, onChange }: Props) => {
  const blandRef = useRef<HTMLSelectElement>(null)
  const nameRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    const bland = blandRef.current?.value || 'all'
    const name = nameRef.current?.value || ''

    onChange(bland, name)
  }

  return isMobile ? (
    <div className={`flex flex-col flex-wrap w-full items-center ${className}`}>
      <Select className="w-full" ref={blandRef}>
        {options}
      </Select>
      <Input className="mt-3 w-full" ref={nameRef} />
      <Button className="mt-3 w-full" onClick={handleClick}>
        検索
      </Button>
    </div>
  ) : (
    <div className={`flex flex-row flex-wrap ${className}`}>
      <Select className="w-64" ref={blandRef}>
        {options}
      </Select>
      <Input className="ml-5 w-64" ref={nameRef} />
      <Button className="ml-5 w-24" onClick={handleClick}>
        検索
      </Button>
    </div>
  )
}

export default Search
