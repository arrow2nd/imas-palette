type Props = {
  className?: string
}

const SearchButton = ({ className = '' }: Props) => (
  <button
    className={`h-10 block rounded-lg shadow-md text-natural-white bg-natural-black ${className}`}
  >
    検索
  </button>
)

export default SearchButton
