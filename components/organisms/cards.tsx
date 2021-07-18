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
    const key = `${e.nameEn}_${e.color.hex}`
    const isKeeped = false

    return isMobile ? (
      <CardMobile key={key} idol={e} isKeeped={isKeeped} />
    ) : (
      <CardDefault key={key} idol={e} isKeeped={isKeeped} />
    )
  })

  return (
    <div className="flex flex-row flex-wrap justify-center mt-12">{cards}</div>
  )
}

export default Cards
