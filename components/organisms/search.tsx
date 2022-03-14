import React, { useMemo, useRef } from 'react'

import Button from 'components/atoms/button'
import Input from 'components/atoms/input'
import Select from 'components/atoms/select'

import { blands } from 'data/blands'

import ColorList from './color-list'

type Props = {
  className?: string
  currentSimilarColor: string
  onChangeBland: (bland: string) => void
  onChangeName: (name: string) => void
  onChangeSimilarColor: (hex: string) => void
}

const Search = ({
  className = '',
  currentSimilarColor,
  onChangeBland,
  onChangeName,
  onChangeSimilarColor
}: Props) => {
  const inputRef = useRef<HTMLInputElement>({} as HTMLInputElement)

  const options = useMemo(
    () =>
      blands.map((e) => (
        <option className="font-sans" key={e.value} value={e.value}>
          {e.title}
        </option>
      )),
    []
  )

  const handleChangeBland = (bland: string) => {
    inputRef.current.value = ''
    onChangeName('')
    onChangeSimilarColor('')
    onChangeBland(bland)
  }

  const handleSubmitName = () => {
    const name = inputRef.current?.value || ''
    onChangeName(name)
  }

  return (
    <div className={className}>
      <div className="flex flex-wrap justify-center flex-col md:flex-row">
        <Select className="w-full md:w-64" onChange={handleChangeBland}>
          {options}
        </Select>
        <Input
          className="mt-3 md:mt-0 ml-0 md:ml-5 w-full md:w-64"
          placeholder="アイドル名（ひらがな可）"
          ref={inputRef}
          onSubmit={handleSubmitName}
        />
        <Button
          className="mt-3 md:mt-0 ml-0 md:ml-5 w-full md:w-24 shadow-md"
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
