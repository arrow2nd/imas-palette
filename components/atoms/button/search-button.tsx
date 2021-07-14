type Props = {
  className?: string
}

const SearchButton = ({ className = '' }: Props) => (
  <div className={className}>
    <button className="w-20 h-10 block rounded-md shadow-md bg-black text-white">
      検索
    </button>
  </div>
)

export default SearchButton
