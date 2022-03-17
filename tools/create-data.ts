import fs from 'fs'

import { fetchIdols } from './libs/fetch-idols'
import { fetchUnits } from './libs/fetch-units'

;(async () => {
  console.log('[ start ]')

  const data = await Promise.all([fetchIdols(), fetchUnits()])
  const results = data
    .flat()
    .sort((a, b) => a.nameKana.localeCompare(b.nameKana))

  const json = JSON.stringify(results, null, '  ')
  const exportText = `import { Idol } from 'types/idol'\n\nexport const idols: Idol[] = ${json}`

  fs.writeFileSync('./data/idols.ts', exportText)

  console.log('[ success! ]')
})()
