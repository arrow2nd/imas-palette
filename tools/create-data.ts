import convert from 'color-convert'
import fs from 'fs'

import { IdolType } from 'types/idol'
import { IdolColorType } from 'types/idol-color'

import { ColorListData } from '../data/color-list'
import { fetchIdolData } from './util'

const ColorClassifier = require('color-classifier')

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
  ColorListData.filter((e) => e.hex !== '').map((e) => e.hex),
  ColorClassifier.AlgorithmTypes.HSV
)

function createColor(hex: string): IdolColorType {
  const rgb = convert.hex.rgb(hex).join(', ')
  const hsv = convert.hex.hsv(hex).join(', ')

  return {
    rgb: `rgb(${rgb})`,
    hsv: `hsv(${hsv})`,
    hex: `#${hex}`,
    similar: colorClassifier.classify(`#${hex}`, 'hex')
  }
}

async function main() {
  const data = await fetchIdolData(query)

  const results = data.map((e): IdolType => {
    const nameJa = e.nameJa.value
    const hex = e.hex.value

    const id = `${e.nameEn.value}_${e.bland.value}`
      .toLowerCase()
      .replace(/ /g, '_')

    return {
      id,
      nameJa,
      nameEn: e.nameEn.value,
      nameKana: e.nameKana.value,
      bland: e.bland.value,
      color: createColor(hex)
    }
  })

  // 保存
  const save = `import { IdolType } from 'types/idol'\n\nexport const IdolData: IdolType[] = ${JSON.stringify(
    results,
    null,
    '  '
  )}`

  fs.writeFileSync('./data/idol.ts', save)

  console.log('[ success! ]')
}

main()
