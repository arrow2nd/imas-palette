type Props = {
  hex: string
}

const ColorSample = ({ hex }: Props) => (
  <div
    className="w-16 h-16 rounded-xl border border-gray-200"
    style={{ backgroundColor: hex }}
    data-testid="color-sample"
  />
)

export default ColorSample
