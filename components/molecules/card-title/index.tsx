import ColorSample from 'components/atoms/color-sample'
import NameLabel from 'components/atoms/label/name'

type Props = {
  name: string
  nameSuppl: string
  hex: string
}

const CardTitle = ({ name, nameSuppl, hex }: Props) => (
  <div className="flex flex-row items-center">
    <ColorSample hex={hex} />
    <NameLabel className="ml-6" name={name} nameSuppl={nameSuppl} />
  </div>
)

export default CardTitle
