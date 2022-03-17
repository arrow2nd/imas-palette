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
  const filterFromCriteria = ({
    brand: brandName,
    nameJa,
    nameKana
  }: ColorDetail) =>
    (brand === '' || brand === brandName) &&
    (nameJa.includes(name) || nameKana.includes(name))

  const results = colors.filter(
    brand === 'keep' ? filterFromKeepId : filterFromCriteria
  )

  // 色味の指定がある場合さらに絞り込む
  return similarColor === ''
    ? results
    : results.filter(({ color }) => color.similar === similarColor)
}
