import { Props } from './props'
import LikeButton from '../../atoms/button/like-button'
import CardTitle from '../../molecules/card-title'
import ColorInfo from '../color-info'

const Card = ({ idol, isTouchable }: Props) => (
  <div className="w-96 my-2 p-6 rounded-lg shadow-md bg-white">
    <div className="flex flex-row items-center justify-between">
      <CardTitle
        nameJa={idol.nameJa}
        nameEn={idol.nameEn}
        color={idol.color.hex}
      />
    </div>
    <ColorInfo color={idol.color} isTouchable={isTouchable} />
    <div>
      <LikeButton className="mt-6 w-full justify-center" />
    </div>
  </div>
)

export default Card
