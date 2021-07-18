import TypeLabel from '../atoms/label/type-label'
import ValueLabel from '../atoms/label/value-label'
import { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

type Props = {
  className?: string
  type: string
  value: string
  isTouchable: boolean
}

const ColorValue = ({ className = '', type, value, isTouchable }: Props) => {
  const [isCopied, setCopied] = useState(false)

  const handleClickCopy = () => {
    if (isCopied) return

    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className={`flex flex-row items-center justify-between ${className}`}>
      <TypeLabel type={type} />
      <CopyToClipboard text={value} onCopy={handleClickCopy}>
        <span>
          <ValueLabel
            value={isCopied ? 'Copied! 👌' : value}
            tooltipDisable={isTouchable}
          />
        </span>
      </CopyToClipboard>
    </div>
  )
}

export default ColorValue
