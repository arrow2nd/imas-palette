type Props = {
  className?: string
  children: React.ReactNode
  onClick: () => void
}

const Button = ({ className = '', children, onClick }: Props) => (
  <button
    className={`px-3 py-1 text-center items-center border border-natural-black text-white hover:text-natural-black bg-natural-black hover:bg-transparent rounded-lg transition-colors ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
)

export default Button
