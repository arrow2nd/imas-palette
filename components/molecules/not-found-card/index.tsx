import { ImCrying } from 'react-icons/im'

import Card from 'components/atoms/card'

const NotFoundCard = () => (
  <Card className="flex flex-row items-center justify-center">
    <ImCrying />
    <p className="ml-2">みつかりませんでした...</p>
  </Card>
)

export default NotFoundCard
