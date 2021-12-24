import Head from 'next/head'

import { SeoInfoType } from 'types/seo'

const SEO = ({ title, desc, url, ogpImgUrl }: SeoInfoType) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={desc} />
    <meta property="og:url" content={url} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={desc} />
    <meta property="og:image" content={ogpImgUrl} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:creator" content="@arrow_2nd" />
    <meta name="twitter:url" content={url} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={desc} />
    <meta name="twitter:image" content={ogpImgUrl} />
  </Head>
)

export default SEO
