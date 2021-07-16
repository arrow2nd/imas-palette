type Props = {
  text: string
}

const TitleText = ({ text }: Props) => (
  <div className="text-4xl tracking-widest">{text}</div>
)

export default TitleText
