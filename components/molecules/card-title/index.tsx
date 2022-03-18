import ColorSample from 'components/atoms/color-sample'
import NameLabel from 'components/atoms/label/name'

type Props = {
  name: string
  nameSuppl: string
  hex: string
  children?: React.ReactNode
}

const CardTitle = ({ name, nameSuppl, hex, children }: Props) => (
  <div className="flex flex-row items-center">
    <ColorSample hex={hex} />
    <NameLabel className="flex-1 ml-6" name={name} nameSuppl={nameSuppl} />
    {children}
  </div>
)

export default CardTitle
