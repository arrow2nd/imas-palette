import { useEffect, useState } from 'react'
import { useIsMobile } from './useIsMobile'
import { Idol } from '../types/idol'
import CardDefault from '../components/organisms/card/default'
import CardMobile from '../components/organisms/card/mobile'

export const useCards = (idols: Idol[]) => {
  const [cardElements, setCardElements] = useState([] as JSX.Element[])
  const isMobile = useIsMobile()

  useEffect(() => {
    const cards = idols.map((e) => {
      const key = `${e.nameEn}_${e.color.hex}`
      const isKeeped = false

      return isMobile ? (
        <CardMobile key={key} idol={e} isKeeped={isKeeped} />
      ) : (
        <CardDefault key={key} idol={e} isKeeped={isKeeped} />
      )
    })

    setCardElements(cards)
  }, [idols, isMobile])

  return cardElements
}
