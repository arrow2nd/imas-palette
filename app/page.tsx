import { M_PLUS_Rounded_1c } from 'next/font/google'
import { Metadata } from 'next/types'

import Footer from 'components/organisms/footer'
import Header from 'components/organisms/header'
import UI from 'components/organisms/ui'

import { seo } from 'data/seo'

const mPlusRounded1c = M_PLUS_Rounded_1c({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--m-plus-rounded-1c'
})

export async function generateMetadata(): Promise<Metadata> {
  const { title, description, url, ogpImgUrl } = seo

  return {
    title,
    description,
    metadataBase: new URL(url),
    openGraph: {
      title,
      description,
      url,
      siteName: title,
      type: 'website',
      images: [{ url: ogpImgUrl }]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [{ url: ogpImgUrl }]
    }
  }
}

export default function Page() {
  return (
    <div
      className={`flex flex-col mx-8 my-20 min-h-screen ${mPlusRounded1c.className}`}
    >
      <Header desc={seo.description} />
      <UI />
      <Footer />
    </div>
  )
}
