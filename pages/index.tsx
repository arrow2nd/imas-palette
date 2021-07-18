import Home from '../components/templates/home'
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import { useUserAgent } from 'next-useragent'

type Props = {
  userAgent: string
}

const ImasPalette = ({ userAgent }: Props) => {
  const { isMobile, isTablet } = useUserAgent(userAgent)
  const isTouchable = isMobile || isTablet

  return <Home isTouchable={isTouchable} />
}

export const getServerSideProps = ({
  req
}: GetServerSidePropsContext): GetServerSidePropsResult<Props> => {
  const userAgent = req.headers['user-agent'] || ''

  return {
    props: {
      userAgent: userAgent
    }
  }
}

export default ImasPalette
