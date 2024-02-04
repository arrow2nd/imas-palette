import { render } from '@testing-library/react'
import CardTitle from './index'

describe('CardTitle', () => {
  test('見た目が変化していないか', () => {
    const { container } = render(
      <CardTitle name="小早川紗枝" nameSuppl="Sae Kobayakawa" hex="#D967A3" />
    )

    expect(container).toMatchSnapshot()
  })
})
