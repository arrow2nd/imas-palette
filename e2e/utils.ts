import { Page } from '@playwright/test'

/**
 * 検索
 * @param page Page
 * @param keyword 検索キーワード
 */
export const search = async (page: Page, keyword: string) => {
  // キーワードを入力
  await page.click('[data-testid="search-textbox"]')
  await page.locator('[data-testid="search-textbox"]').fill(keyword)

  // 検索実行
  await page.click('[data-testid="search-button"]')
}
