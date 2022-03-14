type Props = {
  text: string
}

const Title = ({ text }: Props) => (
  <div className="text-4xl tracking-widest">{text}</div>
)

export default Title
