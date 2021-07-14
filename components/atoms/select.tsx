type Props = {
  className?: string
}

const Select = ({ className = '' }: Props) => (
  <div className={className}>
    <select className="form-select block w-full rounded-md shadow-md">
      <option>全てのブランド</option>
      <option>アイドルマスター</option>
      <option>ミリオンライブ！</option>
      <option>シンデレラガールズ</option>
      <option>SideM</option>
      <option>シャイニーカラーズ</option>
    </select>
  </div>
)

export default Select
