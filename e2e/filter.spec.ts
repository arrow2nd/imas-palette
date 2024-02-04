import { expect, test } from '@playwright/test'
import { search } from './utils'

test.describe('色味で絞り込める', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('正しく絞り込めている', async ({ page }) => {
    await page.selectOption('[data-testid="search-select"]', 'Dearly Stars')
    await page.click('[data-testid="search-color-button-1"]')
    await expect(page.getByTestId('card-area')).toContainText('日高愛')
  })

  test('キーワードでさらに絞り込める', async ({ page }) => {
    await page.selectOption(
      '[data-testid="search-select"]',
      'シャイニーカラーズ'
    )
    await page.click('[data-testid="search-color-button-2"]')

    const cardArea = page.getByTestId('card-area')

    await search(page, '西城樹里')
    await expect(cardArea, 'ヒットする').toContainText('西城樹里')

    await search(page, '風野灯織')
    await expect(cardArea, '色味が異なるアイドルはヒットしない').toContainText(
      '見つかりませんでした'
    )
  })
})
