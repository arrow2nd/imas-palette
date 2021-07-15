type Props = {
  className?: string
  href: string
  children: React.ReactNode
}

const LinkButton = ({ className = '', href, children }: Props) => (
  <span className={`mx-2 text-2xl hover:text-black ${className}`}>
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  </span>
)

export default LinkButton
