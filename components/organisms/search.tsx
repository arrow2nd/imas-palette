import React, { useMemo, useRef } from 'react'
import { blandListData } from '../../data/bland-list'
import Select from '../atoms/select'
import Input from '../atoms/input'
import Button from '../atoms/button'
import ColorList from './color-list'

type Props = {
  className?: string
  isMobile: boolean
  currentSimilarColor: string
  onChangeBland: (bland: string) => void
  onChangeName: (name: string) => void
  onChangeSimilarColor: (hex: string) => void
}

const Search = ({
  className = '',
  isMobile,
  currentSimilarColor,
  onChangeBland,
  onChangeName,
  onChangeSimilarColor
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const divClassName = isMobile ? 'flex-col w-full items-center' : 'flex-row'
  const selectClassName = isMobile ? 'w-full' : 'w-64'
  const inputClassName = isMobile ? 'mt-3 w-full' : 'ml-5 w-64'
  const buttonClassName = isMobile ? 'mt-3 w-full' : 'ml-5 w-24'

  const options = useMemo(
    () =>
      blandListData.map((e) => (
        <option className="font-sans" key={e.value} value={e.value}>
          {e.title}
        </option>
      )),
    []
  )

  const handleChangeBland = (bland: string) => {
    if (inputRef.current) {
      inputRef.current.value = ''
      onChangeName('')
      onChangeSimilarColor('')
    }
    onChangeBland(bland)
  }

  const handleSubmitName = () => {
    const name = inputRef.current?.value || ''
    onChangeName(name)
  }

  return (
    <div className={className}>
      <div className={`flex flex-wrap justify-center ${divClassName}`}>
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
      <ColorList
        current={currentSimilarColor}
        onChange={onChangeSimilarColor}
      />
    </div>
  )
}

export default React.memo(Search)
