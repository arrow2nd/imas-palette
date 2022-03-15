import { idols } from 'data/idols'

import { Idol } from 'types/idol'

export const useIdolData = (
  bland: string,
  name: string,
  similarColor: string,
  keepIdList: string[]
): Idol[] => {
  // keep済みカラーからの検索結果
  if (bland === 'keep') {
    return idols
      .filter((e) => keepIdList.includes(e.id))
      .filter((e) => similarColor === '' || e.color.similar === similarColor)
  }

  // 全体からの検索結果
  return idols
    .filter((e) => bland === '' || bland === e.bland)
    .filter((e) => e.nameJa.includes(name) || e.nameKana.includes(name))
    .filter((e) => similarColor === '' || e.color.similar === similarColor)
}
