import { useEffect, useState } from 'react'
import { useIsMobile } from './useIsMobile'
import { Idol } from '../types/idol'
import CardDefault from '../components/organisms/color-card/default'
import CardMobile from '../components/organisms/color-card/mobile'

export const useColorCards = (idols: Idol[]) => {
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

    console.log(`[ useCards ] ${idols.length} items`)

    setCardElements(cards)
  }, [idols, isMobile])

  return cardElements
}
