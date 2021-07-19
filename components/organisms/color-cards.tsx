import { useColorCards } from '../../hooks/useColorCards'
import { Idol } from '../../types/idol'

type Props = {
  idols: Idol[]
}

const Cards = ({ idols }: Props) => {
  const cards = useColorCards(idols)

  return (
    <div className="flex flex-row flex-wrap justify-center mt-12">{cards}</div>
  )
}

export default Cards
