import { ColorDetail } from 'types/color-detail'

export type Props = {
  data: ColorDetail
  isKeep: boolean
  onClickKeep: () => void
  onClickRemove: () => void
}
