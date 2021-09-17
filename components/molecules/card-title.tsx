import ColorSample from '../atoms/color-sample'
import NameLabel from '../atoms/label/name'

type Props = {
  nameJa: string
  nameEn: string
  color: string
}

const CardTitle = ({ nameJa, nameEn, color }: Props) => (
  <div className="flex flex-row items-center">
    <ColorSample color={color} />
    <NameLabel className="ml-6" nameJa={nameJa} nameEn={nameEn} />
  </div>
)

export default CardTitle
