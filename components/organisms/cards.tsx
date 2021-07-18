import { useIsMobile } from '../../hooks/useIsMobile'
import { Idol } from '../../types/idol'
import CardDefault from './card/default'
import CardMobile from './card/mobile'

type Props = {
  idols: Idol[]
}

const Cards = ({ idols }: Props) => {
  const isMobile = useIsMobile()

  const cards = idols.map((e) => {
    const isKeeped = false

    return isMobile ? (
      <CardMobile key={e.nameEn} idol={e} isKeeped={isKeeped} />
    ) : (
      <CardDefault key={e.nameEn} idol={e} isKeeped={isKeeped} />
    )
  })

  return (
    <div className="flex flex-row flex-wrap justify-center mt-12">{cards}</div>
  )
}

export default Cards
