import { render } from '@testing-library/react'

import { Seo } from 'types/seo'

import Home from './index'

describe('Home', () => {
  test('見た目が変化していないか', () => {
    const seo: Seo = {
      title: 'タイトル',
      desc: '説明',
      url: 'http://example.com',
      ogpImgUrl: 'http://example.com'
    }

    const { container } = render(<Home seo={seo} />)

    expect(container).toMatchSnapshot()
  })
})
