import Links from '../molecules/links'

const Footer = () => (
  <div className="flex flex-col items-center tracking-wide mt-12">
    <Links />
    <div className="mt-4 text-center">
      <span>
        {'Idol color data is obtained from '}
        <a
          className="underline"
          title="im@sparql"
          href="https://sparql.crssnky.xyz/imas/"
          target="_blank"
          rel="noopener noreferrer"
        >
          im@sparql
        </a>
        {'.'}
      </span>
      <p>
        The copyright of all content related to THE IDOLM@STER belongs to BANDAI
        NAMCO Entertainment Inc.
      </p>
    </div>
  </div>
)

export default Footer
