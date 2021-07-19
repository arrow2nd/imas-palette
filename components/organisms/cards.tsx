import { useCards } from '../../hooks/useCards'
import { Idol } from '../../types/idol'

type Props = {
  idols: Idol[]
}

const Cards = ({ idols }: Props) => {
  const cards = useCards(idols)

  return (
    <div className="flex flex-row flex-wrap justify-center mt-12">{cards}</div>
  )
}

export default Cards
