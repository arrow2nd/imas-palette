import { Color } from 'types/color'

import ColorValue from './value'

type Props = {
  color: Color
}

const ColorInfo = ({ color }: Props) => (
  <div className="mt-6">
    <ColorValue type="RGB" value={color.rgb} />
    <ColorValue className="mt-4" type="HSV" value={color.hsv} />
    <ColorValue className="mt-4" type="HEX" value={color.hex} />
  </div>
)

export default ColorInfo
