import { expect, test } from '@playwright/test'

test.describe('ブランドで検索できる', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  const tests = [
    ['765AS', '天海春香'],
    ['Dearly Stars', '日高愛'],
    ['ミリオンライブ！', '春日未来'],
    ['シンデレラガールズ', '相葉夕美'],
    ['SideM', '蒼井享介'],
    ['シャイニーカラーズ', '緋田美琴'],
    ['未分類', '亜夜']
  ]

  for (const [value, want] of tests) {
    test(value, async ({ page }) => {
      await page.selectOption('[data-testid="search-select"]', value)
      await expect(page.getByTestId('card-area')).toContainText(want)
    })
  }
})
