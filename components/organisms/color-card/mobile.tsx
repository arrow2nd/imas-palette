import { Props } from './props'
import Card from '../../atoms/card'
import CardTitle from '../../molecules/card-title'
import LikeButton from '../button/like-button'
import RemoveButton from '../button/remove-button'
import ColorInfo from '../color-info'

const CardMobile = ({ idol, isKeeped }: Props) => {
  const buttonClassName = 'mt-6 w-full justify-center'

  return (
    <Card>
      <div className="flex flex-row items-center justify-between">
        <CardTitle
          nameJa={idol.nameJa}
          nameEn={idol.nameEn}
          color={idol.color.hex}
        />
      </div>
      <ColorInfo color={idol.color} />
      <div>
        {isKeeped ? (
          <RemoveButton className={buttonClassName} />
        ) : (
          <LikeButton className={buttonClassName} />
        )}
      </div>
    </Card>
  )
}

export default CardMobile
