import { ImCrying } from 'react-icons/im'
import Card from '../atoms/card'

const NotFoundCard = () => (
  <Card>
    <div className="flex flex-row items-center justify-center">
      <ImCrying />
      <p className="ml-2">みつかりませんでした...</p>
    </div>
  </Card>
)

export default NotFoundCard
