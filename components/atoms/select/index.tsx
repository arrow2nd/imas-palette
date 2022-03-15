import { ChangeEvent } from 'react'

type Props = {
  className?: string
  children: React.ReactNode
  onChange: (value: string) => void
  dataTestId?: string
}

const Select = ({ className = '', children, onChange, dataTestId }: Props) => {
  const handleChange = (ev: ChangeEvent<HTMLSelectElement>) => {
    onChange(ev.target.value)
  }

  return (
    <div className={className}>
      <select
        className="form-select block w-full border-0 focus:ring-1 focus:ring-natural-black rounded-lg shadow-md"
        data-testid={dataTestId}
        onChange={handleChange}
      >
        {children}
      </select>
    </div>
  )
}

export default Select
