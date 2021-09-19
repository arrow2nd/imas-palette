import { useEffect, useState } from 'react'
import { IdolType } from '../types/idol'
import { IdolData } from '../data/idol'

export const useIdolData = (
  bland: string,
  name: string,
  similarColor: string,
  keepIdList: string[]
) => {
  const [results, setResults] = useState([] as IdolType[])

  useEffect(() => {
    const newResults = IdolData.filter((e) => {
      // keep済みのみを返す
      if (bland === 'keep') return keepIdList.includes(e.id)
      // ブランドの指定がなければすべてを返す
      return bland === '' ? true : bland === e.bland
    })
      .filter((e) =>
        name ? e.nameJa.includes(name) || e.nameKana.includes(name) : true
      )
      .filter((e) =>
        similarColor === '' ? true : e.color.similar === similarColor
      )

    setResults(newResults)
  }, [bland, keepIdList, name, similarColor])

  return results
}
