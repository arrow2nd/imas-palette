import { useCallback, useState } from 'react'
import { useIdolData } from '../../hooks/useIdolData'
import { useIsMobile } from '../../hooks/useIsMobile'
import { useKeepId } from '../../hooks/useKeepId'
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

  const handleChangeBland = useCallback((bland: string) => setBland(bland), [])
  const handleChangeName = useCallback((name: string) => setName(name), [])
  const handleChangeSimilarColor = useCallback(
    (hex: string) => setSimilarColor(hex),
    []
  )

  return (
    <div className="flex-1">
      <Search
        className="mt-12"
        isMobile={isMobile}
        currentSimilarColor={similarColor}
        onChangeBland={handleChangeBland}
        onChangeName={handleChangeName}
        onChangeSimilarColor={handleChangeSimilarColor}
      />
      <ColorCards
        className="mt-12"
        items={searchResults}
        keepIdList={keepIdList}
        isMobile={isMobile}
        onAddKeepId={handleAddKeepId}
        onRemoveKeepId={handleRemoveKeepId}
      />
      <div className="m-5 fixed right-0 bottom-0">
        <MoveTopButton />
      </div>
    </div>
  )
}

export default UI
