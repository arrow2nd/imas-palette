import { ColorListData } from '../../../data/color-list'
import Color from './color'

type Props = {
  onChange: (hex: string) => void
}

const ColorList = ({ onChange }: Props): JSX.Element => {
  const items = ColorListData.map((e) => (
    <Color color={e} onClick={onChange} key={e.hex} />
  ))

  return <div className="flex flex-wrap mt-8 justify-center">{items}</div>
}

export default ColorList
