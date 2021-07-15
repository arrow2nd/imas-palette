import LinkButton from '../atoms/button/link-button'
import { FiGithub, FiTwitter } from 'react-icons/fi'

const Footer = () => (
  <div className="items-center tracking-wide mt-6">
    <div className="flex flex-row">
      <LinkButton href="https://twitter.com/arrow_2nd">
        <FiTwitter />
      </LinkButton>
      <LinkButton
        className="ml-4"
        href="https://github.com/arrow2nd/imas-palette"
      >
        <FiGithub />
      </LinkButton>
    </div>
    <div className="mt-4">
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
