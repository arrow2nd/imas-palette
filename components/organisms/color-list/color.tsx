import { useEffect, useState } from 'react'

import ColorSampleCircle from 'components/atoms/color-sample/circle'

import { Color } from 'types/color'

type Props = {
  color: Color
  isSelected: boolean
  onClick: (hex: string) => void
}

const Color = ({ color, isSelected, onClick }: Props): JSX.Element => {
  const [hex, setHex] = useState('')
  const handleClick = () => onClick(hex)

  useEffect(() => setHex(color.hex), [color.hex])

  return (
    <div
      className={`mx-1 p-0 rounded-full cursor-pointer border-2 ${
        isSelected ? 'border-gray-600' : 'border-transparent'
      }`}
      onClick={handleClick}
    >
      <ColorSampleCircle
        className={`border-2 ${
          color.hex === '' && 'bg-gradient-to-r from-red-500 to-purple-500'
        }`}
        {...color}
      />
    </div>
  )
}

export default Color
