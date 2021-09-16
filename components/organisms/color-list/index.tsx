import { ColorList as ColorListData } from '../../../data/color-list'
import Color from './color'

const ColorList = (): JSX.Element => {
  const items = ColorListData.map((e) => {
    return <Color name={e.name} color={e.hex} key={e.hex} />
  })

  return <div className="flex flex-row mt-4 justify-center">{items}</div>
}

export default ColorList
