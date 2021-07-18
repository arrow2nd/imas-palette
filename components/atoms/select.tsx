type Props = {
  className?: string
  children: React.ReactNode
}

const Select = ({ className = '', children }: Props) => (
  <div className={className}>
    <select className="form-select block w-full rounded-lg shadow-md">
      {children}
    </select>
  </div>
)

export default Select
