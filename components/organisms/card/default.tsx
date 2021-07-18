import { Props } from './props'
import CardTitle from '../../molecules/card-title'
import LikeButton from '../button/like-button'
import RemoveButton from '../button/remove-button'
import ColorInfo from '../color-info'

const Card = ({ idol, isTouchable, isKeeped }: Props) => (
  <div className="w-96 m-2 p-6 rounded-lg shadow-md bg-white">
    <div className="flex flex-row items-center justify-between">
      <CardTitle
        nameJa={idol.nameJa}
        nameEn={idol.nameEn}
        color={idol.color.hex}
      />
      {isKeeped ? <RemoveButton /> : <LikeButton />}
    </div>
    <ColorInfo color={idol.color} isTouchable={isTouchable} />
  </div>
)

export default Card
