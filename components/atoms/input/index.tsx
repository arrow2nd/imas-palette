import { KeyboardEventHandler, forwardRef, useState } from 'react'

type Props = {
  className: string
  placeholder: string
  onSubmit: () => void
  dataTestId?: string
}

const Input = forwardRef<HTMLInputElement, Props>(function InputContent(
  { className, placeholder, onSubmit, dataTestId }: Props,
  ref
) {
  const [isTyping, setIsTyping] = useState(false)

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (ev) => {
    if (!isTyping && ev.key === 'Enter') {
      ev.preventDefault()
      ev.currentTarget.blur()
      onSubmit()
    }
  }

  return (
    <div className={className}>
      <input
        className="form-input block w-full border-0 focus:ring-1 focus:ring-natural-black rounded-lg shadow-md"
        placeholder={placeholder}
        onCompositionStart={() => setIsTyping(true)}
        onCompositionEnd={() => setIsTyping(false)}
        onKeyDown={handleKeyDown}
        data-testid={dataTestId}
        ref={ref}
      />
    </div>
  )
})

export default Input
