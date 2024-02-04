import { render } from '@testing-library/react'
import SearchColors from './index'

describe('SearchColors', () => {
  test('見た目が変化していないか', () => {
    const { container } = render(
      <SearchColors current="" onChange={jest.fn()} />
    )

    expect(container).toMatchSnapshot()
  })
})
