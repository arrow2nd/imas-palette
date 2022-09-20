declare module 'react-infinite-scroller' {
  import React from 'react'

  interface Props {
    loadMore: () => void
    hasMore: boolean
    children?: React.ReactNode
  }

  class CopyToClipboard extends React.Component<Props, {}> {}
  export default InfiniteScroll
}
