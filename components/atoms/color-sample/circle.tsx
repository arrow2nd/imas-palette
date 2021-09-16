type Props = {
  className?: string
  name: string
  color: string
}

const ColorSampleCircle = ({ className = '', name, color }: Props) => {
  const style: React.CSSProperties = {
    backgroundColor: color
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
