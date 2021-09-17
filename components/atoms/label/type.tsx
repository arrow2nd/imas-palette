type Props = {
  type: string
}

const TypeLabel = ({ type }: Props) => (
  <label className="w-16 py-1 text-center text-sm tracking-wide rounded-lg bg-gray-200">
    {type}
  </label>
)

export default TypeLabel
