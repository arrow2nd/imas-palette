import { render } from '@testing-library/react'

import Links from './index'

describe('Links', () => {
  test('見た目が変化していないか', () => {
    const { container } = render(<Links />)

    expect(container).toMatchSnapshot()
  })
})
