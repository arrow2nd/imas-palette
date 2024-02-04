import { render } from '@testing-library/react'
import Title from './index'

describe('Title', () => {
  test('タイトルが正しく表示できるか', () => {
    const { getByText } = render(<Title text="テスト" />)

    expect(getByText('テスト')).toBeTruthy()
  })
})
