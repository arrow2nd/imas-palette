import { useEffect, useMemo, useState } from 'react'
import { isMobile } from 'react-device-detect'
import InfiniteScroll from 'react-infinite-scroller'

import NotFoundCard from 'components/molecules/not-found-card'

import { Idol } from 'types/idol'

import CardDefault from './color-card/default'
import CardMobile from './color-card/mobile'

// 1度に読み込む数
const LOAD_COUNT = 20

type Props = {
  className: string
  items: Idol[]
  keepIdList: string[]
  onAddKeepId: (addId: string) => void
  onRemoveKeepId: (removeId: string) => void
}

const SearchResults = ({
  className,
  items,
  keepIdList,
  onAddKeepId,
  onRemoveKeepId
}: Props) => {
  const [offset, setOffset] = useState(0)
  const [hasMore, setHasMore] = useState(true)

  // 初回表示
  useEffect(() => {
    setOffset(items.length < LOAD_COUNT ? items.length : LOAD_COUNT)
    setHasMore(true)
  }, [items])

  const cards = useMemo(
    () =>
      items.map((e) => {
        const isKeep = keepIdList.includes(e.id)
        const handleClickKeep = () => onAddKeepId(e.id)
        const handleClickRemove = () => onRemoveKeepId(e.id)

        return isMobile ? (
          <CardMobile
            key={e.id}
            data={e}
            isKeep={isKeep}
            onClickKeep={handleClickKeep}
            onClickRemove={handleClickRemove}
          />
        ) : (
          <CardDefault
            key={e.id}
            data={e}
            isKeep={isKeep}
            onClickKeep={handleClickKeep}
            onClickRemove={handleClickRemove}
          />
        )
      }),
    [items, keepIdList, onAddKeepId, onRemoveKeepId]
  )

  const handleLoadMore = () => {
    const nextOffset = offset + LOAD_COUNT

    // オフセットがデータ数を超えたら読み込みを終了
    if (nextOffset > items.length) {
      setHasMore(false)
      setOffset(items.length)
      return
    }

    setOffset(nextOffset)
  }

  return items.length === 0 ? (
    <div className={`flex justify-center ${className}`}>
      <NotFoundCard />
    </div>
  ) : (
    <InfiniteScroll
      className={`flex flex-row flex-wrap justify-center ${className}`}
      loadMore={handleLoadMore}
      hasMore={hasMore}
    >
      {cards.slice(0, offset)}
    </InfiniteScroll>
  )
}

export default SearchResults
