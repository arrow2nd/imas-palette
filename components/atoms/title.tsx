type Props = {
  name: string
}

const Title = ({ name }: Props) => (
  <div className="text-4xl tracking-widest">{name}</div>
)

export default Title
