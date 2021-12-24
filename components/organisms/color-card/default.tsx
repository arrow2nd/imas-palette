import React from 'react'

import Card from 'components/atoms/card'

import CardTitle from 'components/molecules/card-title'

import KeepButton from 'components/organisms/button/keep'
import RemoveButton from 'components/organisms/button/remove'
import ColorInfo from 'components/organisms/color-info'

import { Props } from './props'

const CardDefault = ({ data, isKeep, onClickKeep, onClickRemove }: Props) => (
  <Card>
    <div className="flex flex-row items-center justify-between">
      <CardTitle
        nameJa={data.nameJa}
        nameEn={data.nameEn}
        hex={data.color.hex}
      />
      {isKeep ? (
        <RemoveButton onClick={onClickRemove} />
      ) : (
        <KeepButton onClick={onClickKeep} />
      )}
    </div>
    <ColorInfo color={data.color} />
  </Card>
)

export default React.memo(
  CardDefault,
  (prev, next) => prev.isKeep === next.isKeep
)
