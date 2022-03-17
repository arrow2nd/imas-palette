type Props = {
  className?: string
  name: string
  nameSuppl: string
}

const NameLabel = ({ className = '', name, nameSuppl }: Props) => (
  <div className={className} data-testid="name-label">
    <p className="text-xl">{name}</p>
    <p className="text-sm tracking-wide">{nameSuppl}</p>
  </div>
)

export default NameLabel
