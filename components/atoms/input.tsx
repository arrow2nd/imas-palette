type Props = {
  className?: string
}

const Input = ({ className = '' }: Props) => (
  <div className={className}>
    <input
      type="email"
      className="form-input block w-80 rounded-md shadow-md"
      placeholder="アイドル名から検索"
    />
  </div>
)

export default Input
