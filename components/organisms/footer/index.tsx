import Links from 'components/molecules/links'

const Footer = () => (
  <div className="flex flex-col mt-12 items-center tracking-wide">
    <Links />
    <div className="mt-4 text-sm text-center">
      <p>
        {'The color data for idols is obtained from '}
        <a
          className="underline hover:text-imas transition-colors"
          title="im@sparql"
          href="https://sparql.crssnky.xyz/imas/"
          target="_blank"
          rel="noopener noreferrer"
        >
          im@sparql
        </a>
      </p>
      <p className="mt-1">
        The rights to all content related to THE IDOLM@STER belong to BANDAI
        NAMCO Entertainment Inc.
      </p>
    </div>
  </div>
)

export default Footer
