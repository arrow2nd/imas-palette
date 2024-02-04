import React from 'react'
import Card from 'components/atoms/card'
import CardTitle from 'components/molecules/card-title'
import KeepButton from 'components/organisms/button/keep'
import RemoveButton from 'components/organisms/button/remove'
import ColorInfo from 'components/organisms/color-info'
import { Props } from './props'

const CardMobile = ({ data, isKeep, onClickKeep, onClickRemove }: Props) => (
  <Card>
    <CardTitle
      name={data.name}
      nameSuppl={data.nameSuppl}
      hex={data.color.hex}
    />
    <ColorInfo color={data.color} />
    {isKeep ? (
      <RemoveButton
        className="mt-6 w-full justify-center"
        onClick={onClickRemove}
      />
    ) : (
      <KeepButton
        className="mt-6 w-full justify-center"
        onClick={onClickKeep}
      />
    )}
  </Card>
)

export default React.memo(
  CardMobile,
  (prev, next) =>
    prev.isKeep === next.isKeep &&
    prev.onClickKeep === next.onClickKeep &&
    prev.onClickRemove === next.onClickRemove
)
