import fs from 'fs'
import { fetchIdols } from './libs/fetch-idols'
import { fetchUnits } from './libs/fetch-units'

;(async () => {
  console.log('[ start ]')

  const data = await Promise.all([fetchIdols(), fetchUnits()])

  // 50音順にソート
  const results = data
    .flat()
    .sort((a, b) => a.nameKana.localeCompare(b.nameKana, 'ja'))

  const json = JSON.stringify(results, null, '\t')
  const exportText = `import { ColorDetail } from 'types/color-detail'\n\nexport const colors: ColorDetail[] = ${json}`

  fs.writeFileSync('./data/colors.ts', exportText)

  console.log('[ success! ]')
})()
