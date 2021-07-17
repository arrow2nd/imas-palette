import TitleText from '../atoms/title-text'
import SearchDefault from '../molecules/search/default'
import SearchMobile from '../molecules/search/mobile'
import { useIsMobile } from '../../hooks/useIsMobile'

const Header = () => {
  const isMobile = useIsMobile()

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
      {isMobile ? (
        <SearchMobile className="mt-8" />
      ) : (
        <SearchDefault className="mt-8" />
      )}
    </div>
  )
}

export default Header
