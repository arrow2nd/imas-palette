import { useColorCards } from '../../hooks/useColorCards'
import { Idol } from '../../types/idol'
import { KeepId } from '../../types/keepId'
import NotFoundCard from '../molecules/not-found-card'

type Props = {
  idols: Idol[]
  keepId: KeepId
}

const Cards = ({ idols, keepId }: Props) => {
  const cards = useColorCards(idols, keepId)

  return (
    <div className="flex flex-row flex-wrap justify-center mt-12">
      {idols.length == 0 ? <NotFoundCard /> : cards}
    </div>
  )
}

export default Cards
