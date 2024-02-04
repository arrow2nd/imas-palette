import { useReducer } from 'react'
import { FiCopy } from 'react-icons/fi'
import { RiCheckboxCircleFill } from 'react-icons/ri'
import TypeLabel from 'components/atoms/label/type'

type Props = {
  className?: string
  type: string
  value: string
}

const ColorValue = ({ className = '', type, value }: Props) => {
  const [isCopied, toggleCopied] = useReducer((prev) => !prev, false)

  const copyToClipboard = async () => {
    if (isCopied) return
    await navigator.clipboard.writeText(value)

    toggleCopied()
    setTimeout(() => toggleCopied(), 1500)
  }

  return (
    <div className={`flex flex-row items-center ${className}`}>
      <TypeLabel type={type} />
      <button
        className="flex-1 flex flex-row justify-end items-center text-sm tracking-wide cursor-pointer"
        title="クリックでコピー"
        data-testid="copy-button"
        onClick={() => copyToClipboard()}
      >
        {isCopied ? 'Copied!' : value}
        <span className="ml-2">
          {isCopied ? <RiCheckboxCircleFill /> : <FiCopy />}
        </span>
      </button>
    </div>
  )
}

export default ColorValue
