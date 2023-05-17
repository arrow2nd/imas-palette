import TitleText from 'components/atoms/title'

import GitHubCorner from './github-corner'

type Props = {
  desc: string
}

const Header = ({ desc }: Props) => (
  <header>
    <div className="text-center">
      <a href="">
        <TitleText text="im@s-palette" />
      </a>
      <p className="mt-4 text-natural-gray text-sm md:text-base">{desc}</p>
    </div>
    <GitHubCorner
      href="https://github.com/arrow2nd/imas-palette"
      bannerColor="#1c1c1c"
      octoColor="#faf8f7"
      size={80}
    />
  </header>
)

export default Header
