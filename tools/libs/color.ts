import convert from 'color-convert'
import { Color } from 'types/color'
import { searchColors } from '../../data/search-colors'

const ColorClassifier = require('color-classifier')

const colorClassifier = new ColorClassifier(
  searchColors.filter((e) => e.hex !== '').map((e) => e.hex),
  ColorClassifier.AlgorithmTypes.HSV
)

export function createColor(hex: string): Color {
  const rgb = convert.hex.rgb(hex)

  const rgbStr = rgb.join(',')
  const hsvStr = convert.rgb.hsv(...rgb).join(',')

  return {
    rgb: `rgb(${rgbStr})`,
    hsv: `hsv(${hsvStr})`,
    hex: `#${hex}`,
    similar: colorClassifier.classify(`#${hex}`, 'hex')
  }
}
