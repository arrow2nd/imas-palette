type Props = {
  className?: string
  href: string
  children: React.ReactNode
}

const LinkButton = ({ className = '', href, children }: Props) => (
  <a
    className={`mx-2 text-2xl hover:text-imas transition-colors ${className}`}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
)

export default LinkButton
