import { Color } from '../../types/color'
import ColorValue from './color-value'

type Props = {
  color: Color
  isTouchable: boolean
}

const ColorInfo = ({ color, isTouchable }: Props) => (
  <div className="mt-6">
    <ColorValue type="RGB" value={color.rgb} isTouchable={isTouchable} />
    <ColorValue
      className="mt-4"
      type="HSV"
      value={color.hsv}
      isTouchable={isTouchable}
    />
    <ColorValue
      className="mt-4"
      type="HEX"
      value={color.hex}
      isTouchable={isTouchable}
    />
  </div>
)

export default ColorInfo
