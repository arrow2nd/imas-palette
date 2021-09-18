import { Props } from './props'
import Card from '../../atoms/card'
import CardTitle from '../../molecules/card-title'
import KeepButton from '../button/keep'
import RemoveButton from '../button/remove'
import ColorInfo from '../color-info'

const CardMobile = ({ idol, isKeep, onClickKeep, onClickRemove }: Props) => {
  const buttonClassName = 'mt-6 w-full justify-center'

  return (
    <Card>
      <div className="flex flex-row items-center justify-between">
        <CardTitle
          nameJa={idol.nameJa}
          nameEn={idol.nameEn}
          hex={idol.color.hex}
        />
      </div>
      <ColorInfo color={idol.color} />
      <div>
        {isKeep ? (
          <RemoveButton className={buttonClassName} onClick={onClickRemove} />
        ) : (
          <KeepButton className={buttonClassName} onClick={onClickKeep} />
        )}
      </div>
    </Card>
  )
}

export default CardMobile
