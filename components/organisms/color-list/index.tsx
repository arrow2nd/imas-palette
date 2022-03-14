import { colors } from 'data/colors'

import Color from './color'

type Props = {
  current: string
  onChange: (hex: string) => void
}

const ColorList = ({ current, onChange }: Props): JSX.Element => {
  const items = colors.map((e) => (
    <Color
      color={e}
      isSelected={e.hex === current}
      onClick={onChange}
      key={e.hex}
    />
  ))

  return (
    <div className="flex flex-wrap mt-8 justify-center items-center">
      {items}
    </div>
  )
}

export default ColorList
