import React, { useMemo, useRef } from 'react'

import Button from 'components/atoms/button'
import Input from 'components/atoms/input'
import Select from 'components/atoms/select'

import { brands } from 'data/brands'

import ColorList from '../color-list'

type Props = {
  className?: string
  currentSimilarColor: string
  onChangeBrand: (brand: string) => void
  onChangeName: (name: string) => void
  onChangeSimilarColor: (hex: string) => void
}

const Search = ({
  className = '',
  currentSimilarColor,
  onChangeBrand: onChangebrand,
  onChangeName,
  onChangeSimilarColor
}: Props) => {
  const inputRef = useRef<HTMLInputElement>({} as HTMLInputElement)

  const options = useMemo(
    () =>
      brands.map((e) => (
        <option className="font-sans" key={e.value} value={e.value}>
          {e.title}
        </option>
      )),
    []
  )

  const handleChangebrand = (brand: string) => {
    inputRef.current.value = ''
    onChangeName('')
    onChangeSimilarColor('')
    onChangebrand(brand)
  }

  const handleSubmitName = () => {
    const name = inputRef.current?.value || ''
    onChangeName(name)
  }

  return (
    <div className={className}>
      <div className="flex flex-wrap justify-center flex-col md:flex-row">
        <Select
          className="w-full md:w-64"
          onChange={handleChangebrand}
          dataTestId="search-select"
        >
          {options}
        </Select>
        <Input
          className="mt-3 md:mt-0 ml-0 md:ml-5 w-full md:w-64"
          placeholder="アイドル・ユニット名"
          ref={inputRef}
          onSubmit={handleSubmitName}
          dataTestId="search-textbox"
        />
        <Button
          className="mt-3 md:mt-0 ml-0 md:ml-5 w-full md:w-24 shadow-md"
          onClick={handleSubmitName}
          dataTestId="search-button"
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
