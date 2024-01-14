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
