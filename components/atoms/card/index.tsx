type Props = {
  className?: string
  children: React.ReactNode
  dataTestId?: string
}

const Card = ({ className = '', children, dataTestId }: Props) => (
  <div
    className={`w-96 m-2 p-6 rounded-lg shadow-md bg-white ${className}`}
    data-testid={dataTestId}
  >
    {children}
  </div>
)

export default Card
