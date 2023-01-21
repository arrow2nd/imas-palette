type Props = {
  className?: string
  name: string
  hex: string
}

const ColorSampleCircle = ({ className = '', name, hex }: Props) => (
  <div
    suppressHydrationWarning
    className={`w-8 h-8 rounded-full ${className}`}
    title={name}
    style={{ backgroundColor: hex }}
  />
)

export default ColorSampleCircle
