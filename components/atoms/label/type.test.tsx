import { render } from '@testing-library/react'
import TypeLabel from './type'

describe('TypeLabel', () => {
  test('ラベルが正しく表示されるか', () => {
    const { getByText } = render(<TypeLabel type="RGB" />)

    expect(getByText('RGB')).toBeTruthy()
  })
})
