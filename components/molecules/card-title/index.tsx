import ColorSample from 'components/atoms/color-sample'
import NameLabel from 'components/atoms/label/name'

type Props = {
  nameJa: string
  nameEn: string
  hex: string
}

const CardTitle = ({ nameJa, nameEn, hex }: Props) => (
  <div className="flex flex-row items-center">
    <ColorSample hex={hex} />
    <NameLabel className="ml-6" nameJa={nameJa} nameEn={nameEn} />
  </div>
)

export default CardTitle
