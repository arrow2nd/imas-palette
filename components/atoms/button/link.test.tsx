import { render } from '@testing-library/react'
import LinkButton from './link'

describe('LinkButton', () => {
  const { getByRole } = render(
    <LinkButton href="http://example.com/">
      <p>link</p>
    </LinkButton>
  )
  const link = getByRole('link')

  test('hrefが正しく設定されているか', () => {
    expect(link).toHaveAttribute('href', 'http://example.com/')
  })

  test('子要素が正しく表示されているか', () => {
    expect(link).toContainHTML('<p>link</p>')
  })
})
