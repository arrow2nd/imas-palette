import { FiCode, FiDatabase } from 'react-icons/fi'

type LinkProps = {
  title: string
  href: string
  children: React.ReactNode
}

const Link = ({ title, href, children }: LinkProps) => (
  <a
    className="flex flex-row items-center text-xl hover:text-imas transition-colors"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
    <span className="ml-2 text-sm">{`by ${title}`}</span>
  </a>
)

const Links = () => (
  <div className="space-y-3">
    <Link title="arrow2nd" href="https://imastodon.net/@arrow2nd">
      <FiCode />
    </Link>
    <Link title="im@sparql" href="https://sparql.crssnky.xyz/imas/">
      <FiDatabase />
    </Link>
  </div>
)

export default Links
