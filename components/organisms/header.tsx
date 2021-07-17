import TitleText from '../atoms/title-text'
import Search from '../molecules/search'

const Header = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-center">
        <a href="">
          <TitleText text="im@s-palette" />
        </a>
        <p className="mt-2">
          THE IDOLM@STERシリーズに登場するアイドルの個人カラーを検索できるサイト
        </p>
      </div>
      <Search className="mt-8" />
    </div>
  )
}

export default Header
