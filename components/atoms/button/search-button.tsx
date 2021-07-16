type Props = {
  className?: string
}

const SearchButton = ({ className = '' }: Props) => (
  <div className={className}>
    <button className="w-20 h-10 block rounded-lg shadow-md text-natural-white bg-natural-black">
      検索
    </button>
  </div>
)

export default SearchButton
