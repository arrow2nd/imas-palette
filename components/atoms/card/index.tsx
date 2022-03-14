type Props = {
  children: React.ReactNode
}

const Card = ({ children }: Props) => (
  <div className="w-96 m-2 p-6 rounded-lg shadow-md bg-white">{children}</div>
)

export default Card
