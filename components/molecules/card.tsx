import ColorSample from '../atoms/color-sample'
import NameLabel from '../atoms/name-label'
import LikeButton from '../atoms/button/like-button'

const Card = () => (
  <div className="w-96 bg-white p-6 rounded-lg shadow-md">
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-row items-center">
        <ColorSample />
        <NameLabel
          className="ml-6"
          nameJa="芹沢あさひ"
          nameEn="Asahi Serizawa"
        />
      </div>
      <LikeButton />
    </div>
  </div>
)

export default Card
