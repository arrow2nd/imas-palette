import { render } from '@testing-library/react'

import ColorSample from './index'

describe('ColorSample', () => {
  const { getByTestId } = render(<ColorSample hex="#F30100" />)

  test('指定した色のCSSが設定されているか', () => {
    expect(getByTestId('color-sample')).toHaveStyle(
      'background-color: rgb(243, 1, 0)'
    )
  })
})
