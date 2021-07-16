type Props = {
  className?: string
  nameJa: string
  nameEn: string
}

const NameLabel = ({ className = '', nameJa, nameEn }: Props) => (
  <div className={className}>
    <p className="text-xl">{nameJa}</p>
    <p className="text-sm tracking-wide">{nameEn}</p>
  </div>
)

export default NameLabel
