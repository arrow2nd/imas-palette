import Links from '../molecules/links'

const Footer = () => (
  <div className="flex flex-col mt-12 items-center tracking-wide">
    <Links />
    <div className="mt-4 text-center">
      <p>
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
      </p>
      <p>
        The copyright of all content related to THE IDOLM@STER belongs to BANDAI
        NAMCO Entertainment Inc.
      </p>
    </div>
  </div>
)

export default Footer
