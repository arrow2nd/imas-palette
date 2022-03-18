import { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { FiCopy } from 'react-icons/fi'
import { RiCheckboxCircleFill } from 'react-icons/ri'

import TypeLabel from 'components/atoms/label/type'

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
    <div className={`flex flex-row items-center ${className}`}>
      <TypeLabel type={type} />
      <CopyToClipboard text={value} onCopy={handleClickCopy}>
        <div
          className="flex-1 flex flex-row justify-end items-center text-sm tracking-wide cursor-pointer"
          title="クリックでコピー"
          data-testid="copy-button"
        >
          {isCopied ? 'Copied!' : value}
          <span className="ml-2">
            {isCopied ? <RiCheckboxCircleFill /> : <FiCopy />}
          </span>
        </div>
      </CopyToClipboard>
    </div>
  )
}

export default ColorValue
