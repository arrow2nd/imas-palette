type Props = {
  className?: string
  name: string
  hex: string
}

const ColorSampleCircle = ({ className = '', name, hex }: Props) => {
  const style: React.CSSProperties = {
    backgroundColor: hex
  }

  return (
    <div
      className={`w-8 h-8 rounded-full ${className}`}
      title={name}
      style={style}
    />
  )
}

export default ColorSampleCircle
