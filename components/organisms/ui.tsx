import { useState, useMemo } from 'react'
import { useIdolColor } from '../../hooks/useIdolColor'
import { useIsMobile } from '../../hooks/useIsMobile'
import { Option } from '../../types/option'
import Search from './search'
import Cards from './cards'

type Props = {
  optionList: Option[]
}

const UI = ({ optionList }: Props) => {
  const [bland, setBland] = useState('')
  const [name, setName] = useState('')

  const searchResults = useIdolColor(bland, name)
  const isMobile = useIsMobile()

  const options = useMemo(
    () =>
      optionList.map((e) => (
        <option key={e.value} value={e.value}>
          {e.title}
        </option>
      )),
    [optionList]
  )

  const handleSearch = (bland: string, name: string) => {
    setBland(bland)
    setName(name)
  }

  return (
    <div>
      <div className="flex justify-center">
        <Search
          className="mt-8"
          options={options}
          onChange={handleSearch}
          isMobile={isMobile}
        />
      </div>
      <Cards idols={searchResults} />
    </div>
  )
}

export default UI
