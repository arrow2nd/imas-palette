import { render } from '@testing-library/react'
import NotFoundCard from './index'

describe('NotFoundCard', () => {
  test('見た目が変化していないか', () => {
    const { container } = render(<NotFoundCard />)

    expect(container).toMatchSnapshot()
  })
})
