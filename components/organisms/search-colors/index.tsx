import { searchColors } from 'data/search-colors'

import Color from './color'

type Props = {
  current: string
  onChange: (hex: string) => void
}

const SearchColors = ({ current, onChange }: Props): JSX.Element => {
  const items = searchColors.map((e, i) => (
    <Color
      color={e}
      isSelected={e.hex === current}
      onClick={onChange}
      dataTestId={`search-color-button-${i}`}
      key={e.hex}
    />
  ))

  return (
    <div className="flex flex-wrap mt-8 justify-center items-center">
      {items}
    </div>
  )
}

export default SearchColors
