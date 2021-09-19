import { IdolType } from '../../../types/idol'

export type Props = {
  idol: IdolType
  isKeep: boolean
  onClickKeep: () => void
  onClickRemove: () => void
}
