import { Idol } from 'types/idol'

export type Props = {
  data: Idol
  isKeep: boolean
  onClickKeep: () => void
  onClickRemove: () => void
}
