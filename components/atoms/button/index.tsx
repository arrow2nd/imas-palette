type Props = {
  className?: string
  children: React.ReactNode
  onClick?: () => void
  dataTestId?: string
}

const Button = ({
  className = '',
  children,
  onClick = () => {},
  dataTestId = undefined
}: Props) => (
  <button
    className={`px-3 py-1 text-center items-center border border-natural-black text-white hover:text-natural-black bg-natural-black hover:bg-natural-white rounded-lg transition-colors ${className}`}
    onClick={onClick}
    data-testid={dataTestId}
  >
    {children}
  </button>
)

export default Button
