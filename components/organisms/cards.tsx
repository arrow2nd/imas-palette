import Card from '../molecules/card'
import { Idol } from '../../types/idol'

const Cards = () => {
  const idol: Idol = {
    nameJa: '芹沢あさひ',
    nameEn: 'Asahi Serizawa',
    rgb: '(200, 0, 0)',
    hsv: '(0, 0, 0)',
    hex: '#F30100'
  }

  return (
    <div className="flex-1 mt-8">
      <Card idol={idol} />
    </div>
  )
}

export default Cards
