import { forwardRef } from 'react'

type Props = {
  className?: string
}

const Input = forwardRef<HTMLInputElement, Props>(function InputContent(
  { className = '' }: Props,
  ref
) {
  return (
    <div className={className}>
      <input
        className="form-input block w-full rounded-lg shadow-md"
        placeholder="アイドル名から検索"
        ref={ref}
      />
    </div>
  )
})

export default Input
