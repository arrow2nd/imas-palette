import { useState, useMemo } from 'react'
import { useIdolData } from '../../hooks/useIdolData'
import { useIsMobile } from '../../hooks/useIsMobile'
import { useKeepId } from '../../hooks/useKeepId'
import { Option } from '../../types/option'
import Search from './search'
import ColorCards from './color-cards'

type Props = {
  optionList: Option[]
}

const UI = ({ optionList }: Props) => {
  const [bland, setBland] = useState('')
  const [name, setName] = useState('')
  const keepId = useKeepId()

  const searchResults = useIdolData(bland, name, keepId.list)
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
    <div className="flex-1">
      <div className="flex justify-center">
        <Search
          className="mt-8"
          options={options}
          isMobile={isMobile}
          onChangeBland={handleChangeBland}
          onChangeName={handleChangeName}
        />
      </div>
      <ColorCards idols={searchResults} keepId={keepId} />
    </div>
  )
}

export default UI
