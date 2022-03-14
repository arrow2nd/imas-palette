import { render } from '@testing-library/react'

import NameLabel from './name'

describe('NameLabel', () => {
  test('ラベルが正しく表示されるか', () => {
    const { getByText } = render(<NameLabel nameJa="テスト" nameEn="test" />)

    expect(getByText('テスト')).toBeTruthy()
    expect(getByText('test')).toBeTruthy()
  })
})
