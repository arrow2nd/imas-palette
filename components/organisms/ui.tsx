import { useCallback, useState } from 'react'
import { useIdolData } from '../../hooks/useIdolData'
import { useKeepId } from '../../hooks/useKeepId'
import Search from './search'
import SearchResults from './search-results'
import MoveTopButton from './button/move-top'

const UI = () => {
  const [bland, setBland] = useState('')
  const [name, setName] = useState('')
  const [similarColor, setSimilarColor] = useState('')
  const [keepIdList, handleAddKeepId, handleRemoveKeepId] = useKeepId()

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
        currentSimilarColor={similarColor}
        onChangeBland={handleChangeBland}
        onChangeName={handleChangeName}
        onChangeSimilarColor={handleChangeSimilarColor}
      />
      <SearchResults
        className="mt-12"
        items={searchResults}
        keepIdList={keepIdList}
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
