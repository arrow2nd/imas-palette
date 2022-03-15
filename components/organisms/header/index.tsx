import TitleText from 'components/atoms/title'

type Props = {
  desc: string
}

const Header = ({ desc }: Props) => (
  <div className="flex flex-col items-center text-center">
    <a href="">
      <TitleText text="im@s-palette" />
    </a>
    <p className="mt-4 text-natural-gray text-sm md:text-base">{desc}</p>
  </div>
)

export default Header
