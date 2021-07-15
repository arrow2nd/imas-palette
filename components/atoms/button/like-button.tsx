import { RiHeartAddLine } from 'react-icons/ri'

type Props = {
  className?: string
}

const LikeButton = ({ className = '' }: Props) => (
  <button
    className={`inline-flex items-center px-4 py-2 rounded-lg text-natural-white bg-natural-black ${className}`}
  >
    <RiHeartAddLine />
    <span className="ml-2">Like</span>
  </button>
)

export default LikeButton
