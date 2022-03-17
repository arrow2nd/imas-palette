import { Idol } from 'types/idol'

import { createColorData } from './color'
import { fetchIdolData } from './fetch'

/**
 * SPARQLクエリ
 * （ユニットのイメージカラーを取得）
 */
const query = `
PREFIX schema: <http://schema.org/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX imas: <https://sparql.crssnky.xyz/imasrdf/URIs/imas-schema.ttl#>

SELECT DISTINCT ?resource ?name ?nameKana ?brand ?hex
WHERE {
  ?resource rdf:type imas:Unit;
     rdfs:label ?name;
     imas:Color ?hex;
     imas:nameKana ?nameKana;
     schema:member ?member.
  ?member imas:Brand ?brand.
}
ORDER BY ?nameKana
`

export async function fetchUnits() {
  const data = await fetchIdolData(query)

  const results = data.map(({ resource, name, nameKana, brand, hex }): Idol => {
    const resourceName = resource.value.match(/detail\/(.+)$/)?.[1] || name
    const id = `${resourceName}_${brand.value}`.toLowerCase().replace(/ /g, '_')

    return {
      id,
      nameJa: name.value,
      nameEn: '[ユニット]',
      nameKana: nameKana.value,
      brand: brand.value,
      color: createColorData(hex.value)
    }
  })

  return results
}