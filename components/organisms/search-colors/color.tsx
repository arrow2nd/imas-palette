import ColorSampleCircle from 'components/atoms/color-sample/circle'

import { SearchColor } from 'types/search-color'

type Props = {
  color: SearchColor
  isSelected: boolean
  onClick: (hex: string) => void
  dataTestId?: string
}

const Color = ({
  color,
  isSelected,
  onClick,
  dataTestId
}: Props): JSX.Element => (
  <div
    className={`mx-1 p-0 rounded-full cursor-pointer border-2 ${
      isSelected ? 'border-gray-600' : 'border-transparent'
    }`}
    onClick={() => onClick(color.hex)}
    data-testid={dataTestId}
  >
    <ColorSampleCircle
      className={`border-2 ${
        color.hex === '' && 'bg-gradient-to-r from-red-500 to-purple-500'
      }`}
      {...color}
    />
  </div>
)

export default Color
