import { expect, test } from '@playwright/test'
import { search } from './utils'

test('Keep', async ({ page }) => {
  await page.goto('/')

  await search(page, '白菊ほたる')
  await page.getByTestId('keep-button').click()

  await page.selectOption('[data-testid="search-select"]', 'Keepしたカラー')
  await expect(page.getByTestId('card-area'), '追加できる').toContainText(
    '白菊ほたる'
  )

  await page.getByTestId('remove-button').click()
  await page.selectOption('[data-testid="search-select"]', 'Keepしたカラー')
  await expect(page.getByTestId('card-area'), '削除できる').toContainText(
    '見つかりませんでした'
  )
})

test('Keepしたカラーのキーワード検索', async ({ page }) => {
  await page.goto('/')

  // Keep colors: 七尾百合子, 佐竹美奈子, 高坂海美
  await search(page, '七尾百合子')
  await page.getByTestId('keep-button').click()
  await search(page, '佐竹美奈子')
  await page.getByTestId('keep-button').click()
  await search(page, '高坂海美')
  await page.getByTestId('keep-button').click()

  // Select "keep" in the search select box
  await page.selectOption('[data-testid="search-select"]', 'Keepしたカラー')

  // Enter "子" in the search text box
  await page.getByTestId('search-textbox').fill('子')

  // Click the search button
  await page.getByTestId('search-button').click()

  // Assertions
  const cardArea = page.getByTestId('card-area')
  await expect(cardArea).toContainText('七尾百合子')
  await expect(cardArea).toContainText('佐竹美奈子')
  await expect(cardArea).not.toContainText('高坂海美')
})
