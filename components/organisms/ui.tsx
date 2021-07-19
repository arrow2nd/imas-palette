import { useState, useMemo } from 'react'
import { useIdolColor } from '../../hooks/useIdolData'
import { useIsMobile } from '../../hooks/useIsMobile'
import { Option } from '../../types/option'
import Search from './search'
import ColorCards from './color-cards'

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

  const handleChangeBland = (bland: string) => setBland(bland)
  const handleChangeName = (name: string) => setName(name)

  return (
    <div>
      <div className="flex justify-center">
        <Search
          className="mt-8"
          options={options}
          isMobile={isMobile}
          onChangeBland={handleChangeBland}
          onChangeName={handleChangeName}
        />
      </div>
      <ColorCards idols={searchResults} />
    </div>
  )
}

export default UI
