import { FiCopy } from 'react-icons/fi'
import dynamic from 'next/dynamic'

// https://github.com/wwayne/react-tooltip/issues/675
const ReactTooltip = dynamic(() => import('react-tooltip'), {
  ssr: false
})

type Props = {
  value: string
  tooltipDisable: boolean
}

const ValueLabel = ({ value, tooltipDisable }: Props) => (
  <label
    className="flex flex-row items-center text-sm tracking-wide cursor-pointer"
    data-tip="クリックでコピー"
  >
    {value}
    {tooltipDisable ? (
      <FiCopy className="ml-2" />
    ) : (
      <ReactTooltip place="top" backgroundColor="#1c1c1c" />
    )}
  </label>
)

export default ValueLabel
