import { render } from '@testing-library/react'
import NameLabel from './name'

describe('NameLabel', () => {
  test('ラベルが正しく表示されるか', () => {
    const { getByText } = render(<NameLabel name="テスト" nameSuppl="test" />)

    expect(getByText('テスト')).toBeTruthy()
    expect(getByText('test')).toBeTruthy()
  })
})
