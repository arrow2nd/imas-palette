import { forwardRef } from 'react'

type Props = {
  className?: string
  children: React.ReactNode
}

const Select = forwardRef<HTMLSelectElement, Props>(function SelectContent(
  { className = '', children }: Props,
  ref
) {
  return (
    <div className={className}>
      <select
        className="form-select block w-full rounded-lg shadow-md"
        ref={ref}
      >
        {children}
      </select>
    </div>
  )
})

export default Select
