import { useRef } from 'react'
import Select from '../atoms/select'
import Input from '../atoms/input'
import Button from '../atoms/button'

type Props = {
  className?: string
  options: JSX.Element[]
  isMobile: boolean
  onChange: (bland: string, name: string) => void
}

const Search = ({ className = '', options, isMobile, onChange }: Props) => {
  const blandRef = useRef<HTMLSelectElement>(null)
  const nameRef = useRef<HTMLInputElement>(null)

  const divClassName = isMobile ? 'flex-col w-full items-center' : 'flex-row'
  const selectClassName = isMobile ? 'w-full' : 'w-64'
  const inputClassName = isMobile ? 'mt-3 w-full' : 'ml-5 w-64'
  const buttonClassName = isMobile ? 'mt-3 w-full' : 'ml-5 w-24'

  const handleChange = () => {
    const bland = blandRef.current?.value || ''
    const name = nameRef.current?.value || ''

    onChange(bland, name)
  }

  return (
    <div className={`flex flex-wrap ${divClassName} ${className}`}>
      <Select className={selectClassName} ref={blandRef}>
        {options}
      </Select>
      <Input
        className={inputClassName}
        placeholder="アイドル名（ひらがな可）"
        ref={nameRef}
        onSubmit={handleChange}
      />
      <Button className={buttonClassName} onClick={handleChange}>
        検索
      </Button>
    </div>
  )
}

export default Search
