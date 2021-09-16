import { useRef } from 'react'
import Select from '../atoms/select'
import Input from '../atoms/input'
import Button from '../atoms/button'
import ColorList from './color-list'

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
  const inputRef = useRef<HTMLInputElement>(null)

  const divClassName = isMobile ? 'flex-col w-full items-center' : 'flex-row'
  const selectClassName = isMobile ? 'w-full' : 'w-64'
  const inputClassName = isMobile ? 'mt-3 w-full' : 'ml-5 w-64'
  const buttonClassName = isMobile ? 'mt-3 w-full' : 'ml-5 w-24'

  const handleChangeBland = (bland: string) => {
    // 名前の入力を削除
    if (inputRef.current) {
      inputRef.current.value = ''
      onChangeName('')
    }
    onChangeBland(bland)
  }

  const handleSubmitName = () => {
    const name = inputRef.current?.value || ''
    onChangeName(name)
  }

  return (
    <div className={className}>
      <div className={`flex flex-wrap ${divClassName}`}>
        <Select className={selectClassName} onChange={handleChangeBland}>
          {options}
        </Select>
        <Input
          className={inputClassName}
          placeholder="アイドル名（ひらがな可）"
          ref={inputRef}
          onSubmit={handleSubmitName}
        />
        <Button
          className={`${buttonClassName} shadow-md`}
          onClick={handleSubmitName}
        >
          検索
        </Button>
      </div>
      <ColorList />
    </div>
  )
}

export default Search
