import LikeButton from '../../atoms/button/like-button'
import CardTitle from '../../molecules/card-title'
import ColorInfo from '../color-info'
import { Idol } from '../../../types/idol'

type Props = {
  idol: Idol
}

const Card = ({ idol }: Props) => (
  <div className="w-96 my-2 p-6 rounded-lg shadow-md bg-white">
    <div className="flex flex-row items-center justify-between">
      <CardTitle nameJa={idol.nameJa} nameEn={idol.nameEn} color={idol.hex} />
    </div>
    <div className="mt-6">
      <ColorInfo type="RGB" value={idol.rgb} />
      <ColorInfo className="mt-4" type="HSV" value={idol.hsv} />
      <ColorInfo className="mt-4" type="HEX" value={idol.hex} />
    </div>
    <div>
      <LikeButton className="mt-6 w-full justify-center" />
    </div>
  </div>
)

export default Card
