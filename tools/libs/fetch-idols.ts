import { Idol } from 'types/idol'

import { createColorData } from './color'
import { fetchIdolData } from './fetch'

/**
 * SPARQLクエリ
 * （全アイドルの名前とイメージカラーを取得）
 */
const query = `
PREFIX schema: <http://schema.org/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX imas: <https://sparql.crssnky.xyz/imasrdf/URIs/imas-schema.ttl#>

SELECT DISTINCT ?nameJa ?nameEn ?nameKana ?brand ?hex
WHERE {
  ?d rdf:type ?type;
     rdfs:label ?nameJa;
     imas:Brand ?brand;
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

export async function fetchIdols() {
  const data = await fetchIdolData(query)

  const results = data.map(({ nameJa, nameEn, nameKana, brand, hex }): Idol => {
    const id = `${nameEn.value}_${brand.value}`.toLowerCase().replace(/ /g, '_')

    return {
      id,
      nameJa: nameJa.value,
      nameEn: nameEn.value,
      nameKana: nameKana.value,
      brand: brand.value,
      color: createColorData(hex.value)
    }
  })

  return results
}
