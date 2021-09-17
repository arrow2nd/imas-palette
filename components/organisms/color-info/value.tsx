import { useState } from 'react'
import { FiCopy } from 'react-icons/fi'
import { RiCheckboxCircleFill } from 'react-icons/ri'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import TypeLabel from '../../atoms/label/type'
import ValueLabel from '../../atoms/label/value'

type Props = {
  className?: string
  type: string
  value: string
}

const ColorValue = ({ className = '', type, value }: Props) => {
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
          <ValueLabel value={isCopied ? 'Copied!' : value}>
            {isCopied ? <RiCheckboxCircleFill /> : <FiCopy />}
          </ValueLabel>
        </span>
      </CopyToClipboard>
    </div>
  )
}

export default ColorValue
