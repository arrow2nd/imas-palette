import TitleText from '../atoms/title-text'

const Title = () => (
  <div>
    <a href="">
      <TitleText text="im@s-palette" />
    </a>
    <p className="mt-2">
      {
        'THE IDOLM@STERシリーズに登場するアイドルの個人カラーを検索できるサイトです。'
      }
    </p>
  </div>
)

export default Title
