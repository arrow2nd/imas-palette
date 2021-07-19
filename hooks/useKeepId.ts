import { useState, useEffect, useCallback } from 'react'

const APP_KEY = 'imas-palette'

type KeepIdType = [
  keepIdList: string[],
  addKeepId: (addId: string) => void,
  removeKeepId: (removeId: string) => void
]

export const useKeepId = (): KeepIdType => {
  const [keepIdList, setKeepIdList] = useState([] as string[])

  const addKeepId = useCallback(
    (addId: string) => {
      const newKeepIdList = [...keepIdList, addId]
      setKeepIdList(newKeepIdList)
    },
    [keepIdList]
  )

  const removeKeepId = useCallback(
    (removeId: string) => {
      const newKeepIdList = keepIdList.filter((id) => id !== removeId)
      setKeepIdList(newKeepIdList)
    },
    [keepIdList]
  )

  // LocalStrageから読み込み
  useEffect(() => {
    const items = localStorage.getItem(APP_KEY)
    if (items) {
      setKeepIdList(items.split(','))
    }
  }, [])

  // LocalStrageに書き込み
  useEffect(() => {
    localStorage.setItem(APP_KEY, keepIdList.join(','))
  }, [keepIdList])

  return [keepIdList, addKeepId, removeKeepId]
}
