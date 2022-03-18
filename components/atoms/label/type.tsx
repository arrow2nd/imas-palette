type Props = {
  type: string
}

const TypeLabel = ({ type }: Props) => (
  <div className="flex-none w-16 py-1 text-center text-sm tracking-wide rounded-lg bg-gray-200">
    {type}
  </div>
)

export default TypeLabel
