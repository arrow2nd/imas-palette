import ColorSample from '../atoms/color-sample'
import NameLabel from '../atoms/label/name-label'
import LikeButton from '../atoms/button/like-button'
import ColorInfo from './color-info'
import { Idol } from '../../types/idol'

type Props = {
  idol: Idol
}

const Card = ({ idol }: Props) => (
  <div className="w-96 p-6 rounded-lg shadow-md bg-white">
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-row items-center">
        <ColorSample color={idol.hex} />
        <NameLabel className="ml-6" nameJa={idol.nameJa} nameEn={idol.nameEn} />
      </div>
      <LikeButton />
    </div>
    <div className="mt-6">
      <ColorInfo type="RGB" value={idol.rgb} />
      <ColorInfo className="mt-4" type="HSV" value={idol.hsv} />
      <ColorInfo className="mt-4" type="HEX" value={idol.hex} />
    </div>
  </div>
)

export default Card
