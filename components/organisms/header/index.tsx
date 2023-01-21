import GithubCorner from 'react-github-corner'

import TitleText from 'components/atoms/title'

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
    <GithubCorner
      href="https://github.com/arrow2nd/imas-palette"
      bannerColor="#1c1c1c"
      octoColor="#faf8f7"
      size={80}
      direction="right"
      target="_blank"
      rel="noopener noreferrer"
    />
  </header>
)

export default Header
