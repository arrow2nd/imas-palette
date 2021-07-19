import { Props } from './props'
import Card from '../../atoms/card'
import CardTitle from '../../molecules/card-title'
import LikeButton from '../button/like-button'
import RemoveButton from '../button/remove-button'
import ColorInfo from '../color-info'

const CardDefault = ({ idol, isKeeped }: Props) => (
  <Card>
    <div className="flex flex-row items-center justify-between">
      <CardTitle
        nameJa={idol.nameJa}
        nameEn={idol.nameEn}
        color={idol.color.hex}
      />
      {isKeeped ? <RemoveButton /> : <LikeButton />}
    </div>
    <ColorInfo color={idol.color} />
  </Card>
)

export default CardDefault
