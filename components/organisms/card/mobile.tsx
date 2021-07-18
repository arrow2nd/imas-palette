import { Props } from './props'
import CardTitle from '../../molecules/card-title'
import LikeButton from '../button/like-button'
import RemoveButton from '../button/remove-button'
import ColorInfo from '../color-info'

const Card = ({ idol, isTouchable, isKeeped }: Props) => {
  const buttonClassName = 'mt-6 w-full justify-center'

  return (
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
        {isKeeped ? (
          <RemoveButton className={buttonClassName} />
        ) : (
          <LikeButton className={buttonClassName} />
        )}
      </div>
    </div>
  )
}

export default Card
