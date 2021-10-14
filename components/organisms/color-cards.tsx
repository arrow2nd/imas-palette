import { useEffect, useState } from 'react'
import { IdolType } from '../../types/idol'
import NotFoundCard from '../molecules/not-found-card'
import CardDefault from './color-card/default'
import CardMobile from './color-card/mobile'

type Props = {
  className: string
  items: IdolType[]
  keepIdList: string[]
  isMobile: boolean
  onAddKeepId: (addId: string) => void
  onRemoveKeepId: (removeId: string) => void
}

const ColorCards = ({
  className,
  items,
  keepIdList,
  isMobile,
  onAddKeepId,
  onRemoveKeepId
}: Props) => {
  const [cardElements, setCardElements] = useState([] as JSX.Element[])

  useEffect(() => {
    const cards = items.slice(0, 100).map((e) => {
      const isKeep = keepIdList.includes(e.id)

      const handleClickKeep = () => onAddKeepId(e.id)
      const handleClickRemove = () => onRemoveKeepId(e.id)

      return isMobile ? (
        <CardMobile
          key={e.id}
          idol={e}
          isKeep={isKeep}
          onClickKeep={handleClickKeep}
          onClickRemove={handleClickRemove}
        />
      ) : (
        <CardDefault
          key={e.id}
          idol={e}
          isKeep={isKeep}
          onClickKeep={handleClickKeep}
          onClickRemove={handleClickRemove}
        />
      )
    })

    setCardElements(cards)
  }, [items, isMobile, keepIdList, onAddKeepId, onRemoveKeepId])

  return (
    <div className={`flex flex-row flex-wrap justify-center ${className}`}>
      {items.length === 0 ? <NotFoundCard /> : cardElements}
    </div>
  )
}

export default ColorCards
