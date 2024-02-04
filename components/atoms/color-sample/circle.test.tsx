import { render } from '@testing-library/react'
import ColorSampleCircle from './circle'

describe('ColorSampleCircle', () => {
  const { container } = render(<ColorSampleCircle name="amana" hex="#F54275" />)
  const colorSample = container.children[0]

  test('指定した色のCSSが設定されているか', () => {
    expect(colorSample).toHaveStyle('background-color: rgb(245, 66, 117)')
  })

  test('title属性が設定されているか', () => {
    expect(colorSample).toHaveAttribute('title', 'amana')
  })
})
