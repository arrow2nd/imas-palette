import { idolData } from '../data/idol-data'
import { blandList } from '../data/bland-list'
import Home from '../components/templates/home'

type Props = {
  userAgent: string
}

const ImasPalette = () => <Home idols={idolData} optionList={blandList} />

export default ImasPalette
