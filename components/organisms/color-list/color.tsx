import ColorSampleCircle from '../../atoms/color-sample/circle'
import { ColorType } from '../../../types/color'
import { useEffect, useState } from 'react'

type Props = {
  color: ColorType
  onClick: (hex: string) => void
}

const Color = ({ color, onClick }: Props): JSX.Element => {
  const [hex, setHex] = useState('')
  const handleClick = () => onClick(hex)

  useEffect(() => setHex(color.hex), [])

  return (
    <div className="cursor-pointer" onClick={handleClick}>
      <ColorSampleCircle
        className={`inline-flex mx-1 items-center text-center text-2xl border-2 ${
          color.hex === '' && 'border-dashed border-gray-400'
        } hover:border-black`}
        {...color}
      />
    </div>
  )
}

export default Color
