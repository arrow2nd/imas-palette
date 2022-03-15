import { act, fireEvent, render } from '@testing-library/react'

import Search from './index'

describe('Search', () => {
  test('見た目が変化していないか', () => {
    const { container } = render(
      <Search
        currentSimilarColor=""
        onChangeBland={jest.fn()}
        onChangeName={jest.fn()}
        onChangeSimilarColor={jest.fn()}
      />
    )

    expect(container).toMatchSnapshot()
  })

  test('検索ボタン押下で検索できるか', () => {
    const mock = jest.fn()
    const { getByTestId } = render(
      <Search
        currentSimilarColor=""
        onChangeBland={jest.fn()}
        onChangeName={mock}
        onChangeSimilarColor={jest.fn()}
      />
    )

    act(() => {
      fireEvent.click(getByTestId('search-button'))
    })

    expect(mock).toBeCalled()
  })
})
