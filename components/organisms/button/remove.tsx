import { MdRemoveCircleOutline } from 'react-icons/md'
import Button from 'components/atoms/button'

type Props = {
  className?: string
  onClick: () => void
}

const RemoveButton = ({ className = '', onClick }: Props) => (
  <Button
    className={`inline-flex text-sm ${className}`}
    onClick={onClick}
    dataTestId="remove-button"
  >
    <MdRemoveCircleOutline />
    <span className="ml-2 tracking-wide">Remove</span>
  </Button>
)

export default RemoveButton
