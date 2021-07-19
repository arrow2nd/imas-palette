import { ChangeEvent } from 'react'

type Props = {
  className?: string
  children: React.ReactNode
  onChange: (value: string) => void
}

const Select = ({ className = '', children, onChange }: Props) => {
  const handleChange = (ev: ChangeEvent<HTMLSelectElement>) => {
    onChange(ev.target.value)
  }

  return (
    <div className={className}>
      <select
        className="form-select block w-full rounded-lg shadow-md"
        onChange={handleChange}
      >
        {children}
      </select>
    </div>
  )
}

export default Select
