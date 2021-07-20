import useMedia from 'use-media'

export const useIsMobile = () => {
  // Medium (md) 以上の横幅があるか
  const isWide = useMedia({ minWidth: '768px' })

  return !isWide
}
