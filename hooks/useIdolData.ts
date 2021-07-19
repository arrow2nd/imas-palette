import { useEffect, useState } from 'react'
import { Idol } from '../types/idol'
import { idolData } from '../data/idol-data'

export const useIdolData = (bland: string, name: string) => {
  const [results, setResults] = useState([] as Idol[])

  useEffect(() => {
    const newResults = idolData
      .filter((e) => (bland == '' ? true : bland == e.bland))
      .filter((e) =>
        name ? e.nameJa.includes(name) || e.nameKana.includes(name) : true
      )

    setResults(newResults)
  }, [bland, name])

  return results
}
