import { KeyboardEventHandler, forwardRef, useState } from 'react'

type Props = {
  className: string
  placeholder: string
  onSubmit: () => void
}

const Input = forwardRef<HTMLInputElement, Props>(function InputContent(
  { className, placeholder, onSubmit }: Props,
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
        className="form-input block w-full rounded-lg shadow-md"
        placeholder={placeholder}
        onCompositionStart={() => setIsTyping(true)}
        onCompositionEnd={() => setIsTyping(false)}
        onKeyDown={handleKeyDown}
        ref={ref}
        data-testid="search-textbox"
      />
    </div>
  )
})

export default Input
