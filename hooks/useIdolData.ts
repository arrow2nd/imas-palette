import { idols } from 'data/idols'

import { Idol } from 'types/idol'

export const useIdolData = (
  brand: string,
  name: string,
  similarColor: string,
  keepIdList: string[]
): Idol[] => {
  // keep済みカラーIDで絞り込む
  const filterFromKeepId = ({ id }: Idol) => keepIdList.includes(id)

  // 検索条件で絞り込む
  const filterFromCriteria = ({ brand: brandName, nameJa, nameKana }: Idol) =>
    (brand === '' || brand === brandName) &&
    (nameJa.includes(name) || nameKana.includes(name))

  const results = idols.filter(
    brand === 'keep' ? filterFromKeepId : filterFromCriteria
  )

  // 色味の指定がある場合さらに絞り込む
  return similarColor === ''
    ? results
    : results.filter(({ color }) => color.similar === similarColor)
}
