import { useColorCards } from '../../hooks/useColorCards'
import { Idol } from '../../types/idol'
import NotFoundCard from '../molecules/not-found-card'

type Props = {
  idols: Idol[]
}

const Cards = ({ idols }: Props) => {
  const cards = useColorCards(idols)

  return (
    <div className="flex flex-row flex-wrap justify-center mt-12">
      {idols.length == 0 ? <NotFoundCard /> : cards}
    </div>
  )
}

export default Cards
