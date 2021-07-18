import { Idol } from '../../types/idol'
import { Option } from '../../types/option'
import { useIsMobile } from '../../hooks/useIsMobile'
import SearchDefault from '../molecules/search/default'
import SearchMobile from '../molecules/search/mobile'
import Cards from './cards'

type Props = {
  idols: Idol[]
  optionList: Option[]
}

const UI = ({ idols, optionList }: Props) => {
  const isMobile = useIsMobile()

  const options = optionList.map((e) => (
    <option key={e.value} value={e.value}>
      {e.title}
    </option>
  ))

  return (
    <div>
      <div className="flex justify-center">
        {isMobile ? (
          <SearchMobile className="mt-8" options={options} />
        ) : (
          <SearchDefault className="mt-8" options={options} />
        )}
      </div>
      <Cards idols={idols} />
    </div>
  )
}

export default UI
