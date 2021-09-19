import { useEffect, useState } from 'react'
import { IdolType } from '../../types/idol'
import CardDefault from './color-card/default'
import CardMobile from './color-card/mobile'

type Props = {
  idols: IdolType[]
  keepIdList: string[]
  isMobile: boolean
  onAddKeepId: (addId: string) => void
  onRemoveKeepId: (removeId: string) => void
}

const ColorCards = ({
  idols,
  keepIdList,
  isMobile,
  onAddKeepId,
  onRemoveKeepId
}: Props) => {
  const [cardElements, setCardElements] = useState([] as JSX.Element[])

  useEffect(() => {
    const cards = idols.slice(0, 100).map((e) => {
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

    console.log('end : ' + cards.length)
  }, [idols, isMobile, keepIdList, onAddKeepId, onRemoveKeepId])

  return <>{cardElements}</>
}

export default ColorCards
