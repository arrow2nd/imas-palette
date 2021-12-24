import Card from 'components/atoms/card'

import CardTitle from 'components/molecules/card-title'

import KeepButton from 'components/organisms/button/keep'
import RemoveButton from 'components/organisms/button/remove'
import ColorInfo from 'components/organisms/color-info'

import { Props } from './props'

const CardMobile = ({
  data: idol,
  isKeep,
  onClickKeep,
  onClickRemove
}: Props) => {
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
