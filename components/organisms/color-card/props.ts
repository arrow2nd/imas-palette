import { Idol } from '../../../types/idol'

export type Props = {
  idol: Idol
  isKeep: boolean
  onClickKeep: () => void
  onClickRemove: () => void
}
