import { useEffect, useState } from 'react'
import { Idol } from '../types/idol'
import { idolData } from '../data/idol-data'

export const useIdolData = (
  bland: string,
  name: string,
  keepIdList: string[]
) => {
  const [results, setResults] = useState([] as Idol[])

  useEffect(() => {
    const newResults = idolData
      .filter((e) => {
        // keep済み
        if (bland === 'keep') {
          return keepIdList.includes(e.id)
        }
        return bland === '' ? true : bland === e.bland
      })
      .filter((e) =>
        name ? e.nameJa.includes(name) || e.nameKana.includes(name) : true
      )

    setResults(newResults)
  }, [bland, keepIdList, name])

  return results
}
