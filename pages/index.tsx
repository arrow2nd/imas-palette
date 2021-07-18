import { idolData } from '../data/idol-data'
import Home from '../components/templates/home'

type Props = {
  userAgent: string
}

const ImasPalette = () => <Home idols={idolData} />

export default ImasPalette
