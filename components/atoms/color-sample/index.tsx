type Props = {
  hex: string
}

const ColorSample = ({ hex }: Props) => {
  const style: React.CSSProperties = {
    backgroundColor: hex
  }

  return (
    <div
      className="w-16 h-16 rounded-xl border border-gray-200"
      style={style}
    />
  )
}

export default ColorSample
