type Props = {
  value: string
  children: React.ReactNode
}

const ValueLabel = ({ value, children }: Props) => (
  <label
    className="flex flex-row items-center text-sm tracking-wide cursor-pointer"
    data-tip="クリックでコピー"
  >
    {value}
    <span className="ml-2">{children}</span>
  </label>
)

export default ValueLabel
