import { useState } from 'react'
import { useIdolData } from '../../hooks/useIdolData'
import { useIsMobile } from '../../hooks/useIsMobile'
import { useKeepId } from '../../hooks/useKeepId'
import NotFoundCard from '../molecules/not-found-card'
import Search from './search'
import ColorCards from './color-cards'
import MoveTopButton from './button/move-top'

const UI = () => {
  const [bland, setBland] = useState('')
  const [name, setName] = useState('')
  const [similarColor, setSimilarColor] = useState('')
  const [keepIdList, handleAddKeepId, handleRemoveKeepId] = useKeepId()

  const isMobile = useIsMobile()
  const searchResults = useIdolData(bland, name, similarColor, keepIdList)

  const handleChangeBland = (bland: string) => setBland(bland)
  const handleChangeName = (name: string) => setName(name)
  const handleChangeSimilarColor = (hex: string) => setSimilarColor(hex)

  return (
    <div className="flex-1">
      <div className="flex justify-center">
        <Search
          className="mt-12"
          isMobile={isMobile}
          onChangeBland={handleChangeBland}
          onChangeName={handleChangeName}
          onChangeSimilarColor={handleChangeSimilarColor}
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
            onAddKeepId={handleAddKeepId}
            onRemoveKeepId={handleRemoveKeepId}
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
