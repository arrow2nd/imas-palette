import dynamic from 'next/dynamic'

// https://github.com/wwayne/react-tooltip/issues/675
const ReactTooltip = dynamic(() => import('react-tooltip'), {
  ssr: false
})

type Props = {
  value: string
}

const ValueLabel = ({ value }: Props) => (
  <label
    className="text-sm tracking-wide cursor-pointer"
    data-tip="クリックでコピー"
  >
    {value}
    <ReactTooltip
      place="top"
      border
      borderColor="#faf8f7"
      backgroundColor="#1c1c1c"
    />
  </label>
)

export default ValueLabel
