import { useMemo } from 'react'

import { IdolData } from 'data/idol'

export const useIdolData = (
  bland: string,
  name: string,
  similarColor: string,
  keepIdList: string[]
) => {
  const results = useMemo(
    () =>
      IdolData.filter((e) => {
        // keep済みのみを返す
        if (bland === 'keep') return keepIdList.includes(e.id)
        // ブランドの指定がなければすべてを返す
        return bland === '' || bland === e.bland
      })
        .filter((e) => e.nameJa.includes(name) || e.nameKana.includes(name))
        .filter((e) => similarColor === '' || e.color.similar === similarColor),
    [bland, keepIdList, name, similarColor]
  )

  return results
}
