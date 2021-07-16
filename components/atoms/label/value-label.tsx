type Props = {
  value: string
}

const ValueLabel = ({ value }: Props) => (
  <label className="text-sm tracking-wide">{value}</label>
)

export default ValueLabel
