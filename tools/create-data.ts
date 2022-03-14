import convert from 'color-convert'
import fs from 'fs'

import { Idol } from 'types/idol'
import { IdolColor } from 'types/idol-color'

import { colors } from '../data/colors'
import { fetchIdolData } from './fetch'

const ColorClassifier = require('color-classifier')

/** SPARQLクエリ（全アイドルの名前とイメージカラーを取得） */
const query = `
PREFIX schema: <http://schema.org/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX imas: <https://sparql.crssnky.xyz/imasrdf/URIs/imas-schema.ttl#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
SELECT DISTINCT ?nameJa ?nameEn ?nameKana ?bland ?hex
WHERE {
  ?d rdf:type ?type;
     rdfs:label ?nameJa;
     imas:Brand ?bland;
     imas:Color ?hex.     
  FILTER(?type = imas:Idol)  
  OPTIONAL{
    ?d schema:alternateName ?nameEn.
    FILTER(lang(?nameEn)="en")
  }
  OPTIONAL{
    ?d schema:name ?nameEn.
    FILTER(lang(?nameEn)="en")
  }
  OPTIONAL{ ?d imas:alternateNameKana ?nameKana }
  OPTIONAL{ ?d imas:nameKana ?nameKana }
  OPTIONAL{ ?d imas:givenNameKana ?nameKana }
}
ORDER BY ?nameKana
`

const colorClassifier = new ColorClassifier(
  colors.filter((e) => e.hex !== '').map((e) => e.hex),
  ColorClassifier.AlgorithmTypes.HSV
)

function createColor(hex: string): IdolColor {
  const rgb = convert.hex.rgb(hex).join(', ')
  const hsv = convert.hex.hsv(hex).join(', ')

  return {
    rgb: `rgb(${rgb})`,
    hsv: `hsv(${hsv})`,
    hex: `#${hex}`,
    similar: colorClassifier.classify(`#${hex}`, 'hex')
  }
}

;(async () => {
  const data = await fetchIdolData(query)

  const results = data.map(({ nameJa, nameEn, nameKana, bland, hex }): Idol => {
    const id = `${nameEn.value}_${bland.value}`.toLowerCase().replace(/ /g, '_')

    return {
      id,
      nameJa: nameJa.value,
      nameEn: nameEn.value,
      nameKana: nameKana.value,
      bland: bland.value,
      color: createColor(hex.value)
    }
  })

  const json = JSON.stringify(results, null, '  ')
  const save = `import { Idol } from 'types/idol'\n\nexport const idols: Idol[] = ${json}`

  fs.writeFileSync('./data/idols.ts', save)

  console.log('[ success! ]')
})()
