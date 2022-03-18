import React from 'react'

import Card from 'components/atoms/card'

import CardTitle from 'components/molecules/card-title'

import KeepButton from 'components/organisms/button/keep'
import RemoveButton from 'components/organisms/button/remove'
import ColorInfo from 'components/organisms/color-info'

import { Props } from './props'

const CardDefault = ({ data, isKeep, onClickKeep, onClickRemove }: Props) => (
  <Card className="h-64" dataTestId="color-card">
    <CardTitle name={data.name} nameSuppl={data.nameSuppl} hex={data.color.hex}>
      {isKeep ? (
        <RemoveButton className="ml-4" onClick={onClickRemove} />
      ) : (
        <KeepButton className="ml-4" onClick={onClickKeep} />
      )}
    </CardTitle>
    <ColorInfo color={data.color} />
  </Card>
)

export default React.memo(
  CardDefault,
  (prev, next) =>
    prev.isKeep === next.isKeep &&
    prev.onClickKeep === next.onClickKeep &&
    prev.onClickRemove === next.onClickRemove
)
