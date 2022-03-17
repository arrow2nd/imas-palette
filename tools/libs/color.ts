import convert from 'color-convert'

import { IdolColor } from 'types/idol-color'

import { colors } from '../../data/colors'

const ColorClassifier = require('color-classifier')

const colorClassifier = new ColorClassifier(
  colors.filter((e) => e.hex !== '').map((e) => e.hex),
  ColorClassifier.AlgorithmTypes.HSV
)

export function createColorData(hex: string): IdolColor {
  const rgb = convert.hex.rgb(hex).join(', ')
  const hsv = convert.hex.hsv(hex).join(', ')

  return {
    rgb: `rgb(${rgb})`,
    hsv: `hsv(${hsv})`,
    hex: `#${hex}`,
    similar: colorClassifier.classify(`#${hex}`, 'hex')
  }
}
