import { useEffect, useState } from 'react'
import { IdolType } from '../types/idol'
import { idolData } from '../data/idol-data'

export const useIdolData = (
  bland: string,
  name: string,
  keepIdList: string[]
) => {
  const [results, setResults] = useState([] as IdolType[])

  useEffect(() => {
    const newResults = idolData
      .filter((e) => {
        // keep済みのみを返す
        if (bland === 'keep') return keepIdList.includes(e.id)

        // ブランドの指定がなければすべてを返す
        return bland === '' ? true : bland === e.bland
      })
      .filter((e) =>
        name ? e.nameJa.includes(name) || e.nameKana.includes(name) : true
      )

    setResults(newResults)
  }, [bland, keepIdList, name])

  return results
}
