import { useCallback, useState } from 'react'

import { useIdolData } from 'hooks/useIdolData'
import { useKeepId } from 'hooks/useKeepId'

import MoveTopButton from '../button/move-top'
import ColorCards from '../color-cards'
import Search from '../search'

const UI = () => {
  const [brand, setBrand] = useState('')
  const [name, setName] = useState('')
  const [similarColor, setSimilarColor] = useState('')
  const [keepIdList, handleAddKeepId, handleRemoveKeepId] = useKeepId()

  const searchResults = useIdolData(brand, name, similarColor, keepIdList)

  const handleChangebrand = useCallback((brand: string) => setBrand(brand), [])
  const handleChangeName = useCallback((name: string) => setName(name), [])
  const handleChangeSimilarColor = useCallback(
    (hex: string) => setSimilarColor(hex),
    []
  )

  return (
    <div className="flex-1 mt-12">
      <Search
        currentSimilarColor={similarColor}
        onChangeBrand={handleChangebrand}
        onChangeName={handleChangeName}
        onChangeSimilarColor={handleChangeSimilarColor}
      />
      <ColorCards
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
