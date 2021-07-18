import { Idol } from '../../types/idol'
import { useIsMobile } from '../../hooks/useIsMobile'
import SearchDefault from '../molecules/search/default'
import SearchMobile from '../molecules/search/mobile'
import Cards from './cards'

type Props = {
  idols: Idol[]
}

const UI = (props: Props) => {
  const isMobile = useIsMobile()

  return (
    <div>
      <div className="flex justify-center">
        {isMobile ? (
          <SearchMobile className="mt-8" />
        ) : (
          <SearchDefault className="mt-8" />
        )}
      </div>
      <Cards {...props} />
    </div>
  )
}

export default UI
