import { IdolType } from '../../../types/idol'

export type Props = {
  data: IdolType
  isKeep: boolean
  onClickKeep: () => void
  onClickRemove: () => void
}
