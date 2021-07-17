import CardDefault from './card/default'
import CardMobile from './card/mobile'
import { useIsMobile } from '../../hooks/useIsMobile'
import { Idol } from '../../types/idol'

const Cards = () => {
  const isMobile = useIsMobile()

  const idols: Idol[] = [
    {
      nameJa: '芹沢あさひ',
      nameEn: 'Asahi Serizawa',
      rgb: '(200, 0, 0)',
      hsv: '(0, 0, 0)',
      hex: '#F30100'
    },
    {
      nameJa: '芹沢あさひ',
      nameEn: 'test 2',
      rgb: '(200, 0, 0)',
      hsv: '(0, 0, 0)',
      hex: '#F30100'
    },
    {
      nameJa: '芹沢あさひ',
      nameEn: 'test 3',
      rgb: '(200, 0, 0)',
      hsv: '(0, 0, 0)',
      hex: '#F30100'
    }
  ]

  const cards = idols.map((e) =>
    isMobile ? (
      <CardMobile key={e.nameEn} idol={e} />
    ) : (
      <CardDefault key={e.nameEn} idol={e} />
    )
  )

  return (
    <div className="flex flex-row flex-wrap justify-center mt-12">{cards}</div>
  )
}

export default Cards
