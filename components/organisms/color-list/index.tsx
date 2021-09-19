import { ColorListData } from '../../../data/color-list'
import Color from './color'

type Props = {
  current: string
  onChange: (hex: string) => void
}

const ColorList = ({ current, onChange }: Props): JSX.Element => {
  const items = ColorListData.map((e) => (
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
