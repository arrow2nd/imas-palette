import { render } from '@testing-library/react'

import Card from './index'

describe('Card', () => {
  test('子要素が正しく表示されているか', () => {
    const { container } = render(
      <Card>
        <p>test</p>
      </Card>
    )

    expect(container).toContainHTML('<p>test</p>')
  })
})
