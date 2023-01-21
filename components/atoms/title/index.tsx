type Props = {
  text: string
}

const Title = ({ text }: Props) => (
  <span className="text-3xl md:text-4xl tracking-widest">{text}</span>
)

export default Title
