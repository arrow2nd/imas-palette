import { searchColors } from 'data/search-colors'
import ColorButton from './color-button'

type Props = {
  current: string
  onChange: (hex: string) => void
}

const SearchColors = ({ current, onChange }: Props): JSX.Element => {
  const buttons = searchColors.map((e, i) => (
    <ColorButton
      color={e}
      isSelected={e.hex === current}
      onClick={onChange}
      dataTestId={`search-color-button-${i}`}
      key={e.hex}
    />
  ))

  return (
    <div className="flex flex-wrap mt-8 justify-center items-center">
      {buttons}
    </div>
  )
}

export default SearchColors
