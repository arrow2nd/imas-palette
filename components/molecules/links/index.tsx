import { FiGithub, FiTwitter } from 'react-icons/fi'

import LinkButton from 'components/atoms/button/link'

const Links = () => (
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
)

export default Links
