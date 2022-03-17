import { expect, test } from '@playwright/test'

test('検索して画面を記録', async ({ contextOptions, browser }, { project }) => {
  const saveDir = `e2e/results/${project.name}`
  const context = await browser.newContext({
    ...contextOptions,
    recordVideo: { dir: saveDir }
  })

  const page = await context.newPage()
  await page.goto('http://localhost:3000')

  // ブランドを指定
  await page.selectOption('[data-testid="search-select"]', '765AS')

  // アイドル名を入力
  await page.click('[data-testid="search-textbox"]')
  await page.locator('[data-testid="search-textbox"]').fill('あまみはるか')

  // 検索実行
  await page.click('[data-testid="search-button"]')

  // 色味で絞り込み
  await page.click('[data-testid="search-color-button-1"]')

  await expect(page.locator('[data-testid="name-label"] > p')).toHaveText([
    '天海春香',
    'Haruka Amami'
  ])

  // ページ全体のスクリーンショット
  await page.screenshot({ path: `${saveDir}/full-page.png`, fullPage: true })

  await context.close()
})
