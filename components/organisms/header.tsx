import Title from '../atoms/title'
import Search from '../molecules/search'

const Header = () => {
  return (
    <div>
      <div>
        <Title name="im@s-palette" />
        <p className="mt-2">
          {
            'THE IDOLM@STERシリーズに登場するアイドルの個人カラーを検索できるサイトです。'
          }
        </p>
      </div>
      <Search className="mt-6" />
    </div>
  )
}

export default Header
