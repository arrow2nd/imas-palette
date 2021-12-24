import { useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'
import InfiniteScroll from 'react-infinite-scroller'

import NotFoundCard from 'components/molecules/not-found-card'

import { IdolType } from 'types/idol'

import CardDefault from './color-card/default'
import CardMobile from './color-card/mobile'

type Props = {
  className: string
  items: IdolType[]
  keepIdList: string[]
  onAddKeepId: (addId: string) => void
  onRemoveKeepId: (removeId: string) => void
}

// 1回で読み込む数
const LOAD_LIMIT = 20

const SearchResults = ({
  className,
  items,
  keepIdList,
  onAddKeepId,
  onRemoveKeepId
}: Props) => {
  const [cards, setCards] = useState([] as JSX.Element[])
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    if (items.length === 0) return

    setCards([])
    setHasMore(true)
  }, [items])

  const handleLoadMore = () => {
    // 読み込み終了
    if (cards.length >= items.length) {
      setHasMore(false)
      return
    }

    const addCards = items
      .slice(cards.length, cards.length + LOAD_LIMIT)
      .map((e) => {
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
      })

    setCards([...cards, ...addCards])
  }

  return (
    <div className={className}>
      {items.length === 0 ? (
        <div className="flex justify-center">
          <NotFoundCard />
        </div>
      ) : (
        <InfiniteScroll
          className="flex flex-row flex-wrap justify-center"
          loadMore={handleLoadMore}
          hasMore={hasMore}
        >
          {cards}
        </InfiniteScroll>
      )}
    </div>
  )
}

export default SearchResults
