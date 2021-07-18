'use strict'
const { fetchIdolData } = require('./util')
const fs = require('fs')
const convert = require('color-convert')

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

async function main() {
  const data = await fetchIdolData(query)

  const idolData = data.map((e) => ({
    nameJa: e.nameJa.value,
    nameEn: e.nameEn.value,
    nameKana: e.nameKana.value,
    bland: e.bland.value,
    color: createColor(e.hex.value)
  }))

  // 保存
  const save = `import { Idol } from '../types/idol'\n\nexport const idolData: Idol[] = ${JSON.stringify(
    idolData,
    null,
    '  '
  )}`

  fs.writeFileSync('./data/idol-data.ts', save)

  console.log('[ success! ]')
}

function createColor(hex) {
  const rgb = convert.hex.rgb(hex).join(', ')
  const hsv = convert.hex.hsv(hex).join(', ')

  return {
    rgb: rgb,
    hsv: hsv,
    hex: `#${hex}`
  }
}

main()
