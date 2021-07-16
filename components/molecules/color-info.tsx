import TypeLabel from '../atoms/label/type-label'
import ValueLabel from '../atoms/label/value-label'

type Props = {
  className?: string
  type: string
  value: string
}

const ColorInfo = ({ className = '', type, value }: Props) => (
  <div className={`flex flex-row items-center justify-between ${className}`}>
    <TypeLabel type={type} />
    <ValueLabel value={value} />
  </div>
)

export default ColorInfo
