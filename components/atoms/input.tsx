import { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from 'react'

type Props = {
  className?: string
  placeholder?: string
  onSubmit?: () => void
}

const Input = forwardRef<HTMLInputElement, Props>(function InputContent(
  { className = '', placeholder = '', onSubmit = () => {} }: Props,
  ref
) {
  const handleKeyDown = (
    ev: DetailedHTMLProps<
      InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >
  ) => {
    if (ev.key === 'Enter') {
      onSubmit()
    }
  }

  return (
    <div className={className}>
      <input
        className="form-input block w-full rounded-lg shadow-md"
        placeholder={placeholder}
        ref={ref}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
})

export default Input
