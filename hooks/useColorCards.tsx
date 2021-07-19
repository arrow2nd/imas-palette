import { useEffect, useState } from 'react'
import { useIsMobile } from './useIsMobile'
import { Idol } from '../types/idol'
import { KeepId } from '../types/keepId'
import CardDefault from '../components/organisms/color-card/default'
import CardMobile from '../components/organisms/color-card/mobile'

export const useColorCards = (idols: Idol[], keepId: KeepId) => {
  const [cardElements, setCardElements] = useState([] as JSX.Element[])
  const isMobile = useIsMobile()

  useEffect(() => {
    const cards = idols.map((e) => {
      const isKeep = keepId.list.includes(e.id)

      const handleClickKeep = () => keepId.add(e.id)
      const handleClickRemove = () => keepId.remove(e.id)

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

    console.log(`[ useCards ] ${idols.length} items`)

    setCardElements(cards)
  }, [idols, isMobile, keepId])

  return cardElements
}
