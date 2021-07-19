import { useRef } from 'react'
import Select from '../atoms/select'
import Input from '../atoms/input'
import Button from '../atoms/button'

type Props = {
  className?: string
  options: JSX.Element[]
  isMobile: boolean
  onChangeBland: (bland: string) => void
  onChangeName: (name: string) => void
}

const Search = ({
  className = '',
  options,
  isMobile,
  onChangeBland,
  onChangeName
}: Props) => {
  const nameRef = useRef<HTMLInputElement>(null)

  const divClassName = isMobile ? 'flex-col w-full items-center' : 'flex-row'
  const selectClassName = isMobile ? 'w-full' : 'w-64'
  const inputClassName = isMobile ? 'mt-3 w-full' : 'ml-5 w-64'
  const buttonClassName = isMobile ? 'mt-3 w-full' : 'ml-5 w-24'

  const handleSubmitName = () => {
    const name = nameRef.current?.value || ''
    onChangeName(name)
  }

  return (
    <div className={`flex flex-wrap ${divClassName} ${className}`}>
      <Select className={selectClassName} onChange={onChangeBland}>
        {options}
      </Select>
      <Input
        className={inputClassName}
        placeholder="アイドル名（ひらがな可）"
        ref={nameRef}
        onSubmit={handleSubmitName}
      />
      <Button className={buttonClassName} onClick={handleSubmitName}>
        検索
      </Button>
    </div>
  )
}

export default Search
