import { colors } from 'data/colors'

import { ColorDetail } from 'types/color-detail'

export const useColorData = (
  brand: string,
  name: string,
  similarColor: string,
  keepIdList: string[]
): ColorDetail[] => {
  // keep済みカラーIDで絞り込む
  const filterFromKeepId = ({ id }: ColorDetail) => keepIdList.includes(id)

  // 検索条件で絞り込む
  const filterFromCriteria = (e: ColorDetail) =>
    (brand === '' || brand === e.brand) &&
    (e.name.includes(name) || e.nameKana.includes(name))

  const results = colors.filter(
    brand === 'keep' ? filterFromKeepId : filterFromCriteria
  )

  // 色味の指定がある場合さらに絞り込む
  return similarColor === ''
    ? results
    : results.filter(({ color }) => color.similar === similarColor)
}
