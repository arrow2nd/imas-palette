import { FiDatabase } from 'react-icons/fi'

const Link = () => (
  <a
    className="flex flex-row items-center text-xl hover:text-imas transition-colors"
    title="Database by im@sparql"
    href="https://sparql.crssnky.xyz/imas"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FiDatabase />
    <span className="ml-2 text-sm">by im@sparql</span>
  </a>
)

const Footer = () => (
  <div className="flex flex-col mt-20 items-center text-sm tracking-wide">
    <Link />
    <p className="mt-6 text-center">
      The rights to all content related to THE IDOLM@STER belong to BANDAI NAMCO
      Entertainment Inc.
    </p>
  </div>
)

export default Footer
