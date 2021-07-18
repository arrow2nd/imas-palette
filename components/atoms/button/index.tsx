type Props = {
  className?: string
  children: React.ReactNode
}

const Button = ({ className = '', children }: Props) => (
  <button
    className={`px-3 py-1 text-center items-center border border-natural-black text-white hover:text-natural-black bg-natural-black hover:bg-transparent rounded-lg transition-colors ${className}`}
  >
    {children}
  </button>
)

export default Button
