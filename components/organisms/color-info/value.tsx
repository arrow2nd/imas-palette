import { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { FiCopy } from 'react-icons/fi'
import { RiCheckboxCircleFill } from 'react-icons/ri'

import TypeLabel from 'components/atoms/label/type'
import ValueLabel from 'components/atoms/label/value'

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
