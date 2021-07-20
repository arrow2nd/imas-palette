import { useEffect, useState } from 'react'
import { Idol } from '../../types/idol'
import CardDefault from './color-card/default'
import CardMobile from './color-card/mobile'

type Props = {
  idols: Idol[]
  keepIdList: string[]
  isMobile: boolean
  addKeepId: (addId: string) => void
  removeKeepId: (removeId: string) => void
}

const ColorCards = ({
  idols,
  keepIdList,
  isMobile,
  addKeepId,
  removeKeepId
}: Props) => {
  const [cardElements, setCardElements] = useState([] as JSX.Element[])

  useEffect(() => {
    const cards = idols.map((e) => {
      const isKeep = keepIdList.includes(e.id)

      const handleClickKeep = () => addKeepId(e.id)
      const handleClickRemove = () => removeKeepId(e.id)

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
  }, [addKeepId, idols, isMobile, keepIdList, removeKeepId])

  return <>{cardElements}</>
}

export default ColorCards
