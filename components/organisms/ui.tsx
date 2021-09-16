import { useState, useMemo } from 'react'
import { useIdolData } from '../../hooks/useIdolData'
import { useIsMobile } from '../../hooks/useIsMobile'
import { useKeepId } from '../../hooks/useKeepId'
import { OptionType } from '../../types/option'
import NotFoundCard from '../molecules/not-found-card'
import Search from './search'
import ColorCards from './color-cards'
import MoveTopButton from './button/move-top-button'

type Props = {
  optionList: OptionType[]
}

const UI = ({ optionList }: Props) => {
  const [bland, setBland] = useState('')
  const [name, setName] = useState('')
  const [keepIdList, addKeepId, removeKeepId] = useKeepId()

  const isMobile = useIsMobile()
  const searchResults = useIdolData(bland, name, keepIdList)

  const options = useMemo(
    () =>
      optionList.map((e) => (
        <option className="font-sans" key={e.value} value={e.value}>
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
          className="mt-12"
          options={options}
          isMobile={isMobile}
          onChangeBland={handleChangeBland}
          onChangeName={handleChangeName}
        />
      </div>
      <div className="flex flex-row flex-wrap justify-center mt-12">
        {searchResults.length == 0 ? (
          <NotFoundCard />
        ) : (
          <ColorCards
            idols={searchResults}
            keepIdList={keepIdList}
            isMobile={isMobile}
            addKeepId={addKeepId}
            removeKeepId={removeKeepId}
          />
        )}
      </div>
      <div className="m-5 fixed right-0 bottom-0">
        <MoveTopButton />
      </div>
    </div>
  )
}

export default UI
