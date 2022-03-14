import { useMemo } from 'react'

import { idols } from 'data/idols'

export const useIdolData = (
  bland: string,
  name: string,
  similarColor: string,
  keepIdList: string[]
) => {
  // Keep済のデータ
  const keeps = useMemo(
    () =>
      idols
        .filter((e) => keepIdList.includes(e.id))
        .filter((e) => similarColor === '' || e.color.similar === similarColor),
    [keepIdList, similarColor]
  )

  // 検索結果
  const results = useMemo(
    () =>
      idols
        .filter((e) => bland === '' || bland === e.bland)
        .filter((e) => e.nameJa.includes(name) || e.nameKana.includes(name))
        .filter((e) => similarColor === '' || e.color.similar === similarColor),
    [bland, name, similarColor]
  )

  return bland === 'keep' ? keeps : results
}
