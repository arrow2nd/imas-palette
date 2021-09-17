import { seoData } from '../data/seo'
import { blandList } from '../data/bland-list'
import Home from '../components/templates/home'

const ImasPalette = () => <Home seo={seoData} optionList={blandList} />

export default ImasPalette
