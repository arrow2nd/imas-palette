type Props = {
  hex: string
}

const ColorSample = ({ hex }: Props) => (
  <div
    className="flex-none w-16 h-16 rounded-xl border border-gray-200"
    style={{ backgroundColor: hex }}
  />
)

export default ColorSample
