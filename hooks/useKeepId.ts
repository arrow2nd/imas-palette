import { useCallback, useEffect, useState } from 'react'

const APP_KEY = 'imas-palette'

type KeepIdType = [
  keepIds: string[],
  handleAddKeepId: (addId: string) => void,
  handleRemoveKeepId: (removeId: string) => void
]

export const useKeepId = (): KeepIdType => {
  const [keepIds, setKeepIds] = useState([] as string[])

  const handleAddKeepId = useCallback(
    (addId: string) => setKeepIds([...keepIds, addId]),
    [keepIds]
  )

  const handleRemoveKeepId = useCallback(
    (removeId: string) => {
      const newKeepIdList = keepIds.filter((id) => id !== removeId)
      setKeepIds(newKeepIdList)
    },
    [keepIds]
  )

  // LocalStrageから読み込み
  useEffect(() => {
    const items = localStorage.getItem(APP_KEY)
    if (items) {
      setKeepIds(items.split(','))
    }
  }, [])

  // LocalStrageに書き込み
  useEffect(() => {
    localStorage.setItem(APP_KEY, keepIds.join(','))
  }, [keepIds])

  return [keepIds, handleAddKeepId, handleRemoveKeepId]
}
