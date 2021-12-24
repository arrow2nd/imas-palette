import { FiGithub, FiTwitter } from 'react-icons/fi'

import LinkButton from 'components/atoms/button/link'

type Props = {
  className?: string
}

const Links = ({ className = '' }: Props) => (
  <div className={`flex flex-row ${className}`}>
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
