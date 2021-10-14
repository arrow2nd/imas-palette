import { Props } from './props'
import Card from '../../atoms/card'
import CardTitle from '../../molecules/card-title'
import KeepButton from '../button/keep'
import RemoveButton from '../button/remove'
import ColorInfo from '../color-info'

const CardDefault = ({
  data: idol,
  isKeep,
  onClickKeep,
  onClickRemove
}: Props) => (
  <Card>
    <div className="flex flex-row items-center justify-between">
      <CardTitle
        nameJa={idol.nameJa}
        nameEn={idol.nameEn}
        hex={idol.color.hex}
      />
      {isKeep ? (
        <RemoveButton onClick={onClickRemove} />
      ) : (
        <KeepButton onClick={onClickKeep} />
      )}
    </div>
    <ColorInfo color={idol.color} />
  </Card>
)

export default CardDefault
