import CardDefault from './card/default'
import CardMobile from './card/mobile'
import { useIsMobile } from '../../hooks/useIsMobile'
import { idol } from '../../types/idol'

type Props = {
  isTouchable: boolean
}

const Cards = ({ isTouchable }: Props) => {
  const isMobile = useIsMobile()

  const idols: idol[] = [
    {
      nameJa: '芹沢あさひ',
      nameEn: 'Asahi Serizawa',
      color: {
        rgb: '(200, 0, 0)',
        hsv: '(0, 0, 0)',
        hex: '#F30100'
      }
    },
    {
      nameJa: '芹沢あさひ',
      nameEn: 'test 2',
      color: {
        rgb: '(200, 0, 0)',
        hsv: '(0, 0, 0)',
        hex: '#F30100'
      }
    },
    {
      nameJa: '芹沢あさひ',
      nameEn: 'test 3',
      color: {
        rgb: '(200, 0, 0)',
        hsv: '(0, 0, 0)',
        hex: '#F30100'
      }
    }
  ]

  const cards = idols.map((e) =>
    isMobile ? (
      <CardMobile key={e.nameEn} idol={e} isTouchable={isTouchable} />
    ) : (
      <CardDefault key={e.nameEn} idol={e} isTouchable={isTouchable} />
    )
  )

  return (
    <div className="flex flex-row flex-wrap justify-center mt-12">{cards}</div>
  )
}

export default Cards
