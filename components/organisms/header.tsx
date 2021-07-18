import TitleText from '../atoms/title-text'

const Header = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <a href="">
        <TitleText text="im@s-palette" />
      </a>
      <p className="mt-2">
        THE IDOLM@STERシリーズに登場するアイドルの個人カラーを検索できるサイト
      </p>
    </div>
  )
}

export default Header
