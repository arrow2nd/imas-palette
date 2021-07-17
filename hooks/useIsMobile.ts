import useMedia from 'use-media'

export const useIsMobile = () => {
  // Medium (md)
  const isWide = useMedia({ minWidth: '768px' })

  return !isWide
}
