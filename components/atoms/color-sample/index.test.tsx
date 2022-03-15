import { render } from '@testing-library/react'

import ColorSample from './index'

describe('ColorSample', () => {
  const { container } = render(<ColorSample hex="#F30100" />)

  test('指定した色のCSSが設定されているか', () => {
    expect(container.children[0]).toHaveStyle(
      'background-color: rgb(243, 1, 0)'
    )
  })
})
