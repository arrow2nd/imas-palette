import { useState, useEffect, useCallback } from 'react'
import { KeepId } from '../types/keepId'

const APP_KEY = 'imas-pallet'

export const useKeepId = (): KeepId => {
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
      console.log(`[ load ] ${items}`)
      setKeepIdList(items.split(','))
    }
  }, [])

  // LocalStrageに書き込み
  useEffect(() => {
    localStorage.setItem(APP_KEY, keepIdList.join(','))
    console.log(`[ save ] ${keepIdList.join(',')}`)
  }, [keepIdList])

  return {
    list: keepIdList,
    add: addKeepId,
    remove: removeKeepId
  }
}
