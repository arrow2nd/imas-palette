import { render } from '@testing-library/react'

import ColorList from './index'

describe('ColorList', () => {
  test('見た目が変化していないか', () => {
    const { container } = render(<ColorList current="" onChange={jest.fn()} />)

    expect(container).toMatchSnapshot()
  })
})
