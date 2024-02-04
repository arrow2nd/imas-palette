import { expect, test } from '@playwright/test'
import { search } from './utils'

test.describe('アイドル名で検索できる', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('漢字から', async ({ page }) => {
    await search(page, '天海春香')
    await expect(page.getByTestId('card-area')).toContainText('天海春香')
  })

  test('ひらがなから', async ({ page }) => {
    await search(page, 'あまみはるか')
    await expect(page.getByTestId('card-area')).toContainText('天海春香')
  })

  test('ブランド絞り込み', async ({ page }) => {
    await page.selectOption(
      '[data-testid="search-select"]',
      'シンデレラガールズ'
    )

    const cardArea = page.getByTestId('card-area')

    await search(page, '白菊ほたる')
    await expect(
      cardArea,
      'シンデレラガールズのアイドルがヒットする'
    ).toContainText('白菊ほたる')

    await search(page, '天海春香')
    await expect(cardArea, '765ASのアイドルがヒットしない').toContainText(
      '見つかりませんでした'
    )
  })
})

test('ユニット名で検索できる', async ({ page }) => {
  await page.goto('/')
  await search(page, '放課後クライマックスガールズ')
  await expect(page.getByTestId('card-area')).toContainText(
    '放課後クライマックスガールズ'
  )
})
