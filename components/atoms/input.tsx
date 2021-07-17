type Props = {
  className?: string
}

const Input = ({ className = '' }: Props) => (
  <div className={className}>
    <input
      className="form-input block w-full rounded-lg shadow-md"
      placeholder="アイドル名から検索"
    />
  </div>
)

export default Input
