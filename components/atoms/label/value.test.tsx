import { render } from '@testing-library/react'

import ValueLabel from './value'

describe('TypeLabel', () => {
  test('ラベルが正しく表示されるか', () => {
    const { getByText } = render(
      <ValueLabel value="#E22B30">
        <div />
      </ValueLabel>
    )

    expect(getByText('#E22B30')).toBeTruthy()
  })

  test('子要素が正しく表示されるか', () => {
    const { container } = render(
      <ValueLabel value="label">
        <p>test</p>
      </ValueLabel>
    )

    expect(container).toContainHTML('<p>test</p>')
  })
})
