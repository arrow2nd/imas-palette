type Props = {
  color: string
}

const ColorSample = ({ color }: Props) => {
  const style: React.CSSProperties = {
    backgroundColor: color
  }

  return <div className="w-16 h-16 rounded-xl" style={style} />
}

export default ColorSample
