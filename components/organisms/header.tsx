import TitleText from 'components/atoms/title-text'

type Props = {
  desc: string
}

const Header = ({ desc }: Props) => (
  <div className="flex flex-col items-center text-center">
    <a href="">
      <TitleText text="im@s-palette" />
    </a>
    <p className="mt-2">{desc}</p>
  </div>
)

export default Header
