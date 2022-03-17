import { act, fireEvent, render } from '@testing-library/react'

import Color from './color'

describe('Color', () => {
  const color = {
    name: '赤',
    hex: '#ff0000'
  }

  test('選択状態の表示が正しいか', () => {
    const props = {
      color: color,
      onClick: jest.fn()
    }

    const { container, rerender } = render(
      <Color {...props} isSelected={false} />
    )
    const prevInnerHtml = container.innerHTML

    rerender(<Color {...props} isSelected={true} />)

    expect(prevInnerHtml).not.toBe(container.innerHTML)
  })

  test('色が指定されていない時の表示は正しいか', () => {
    const { container } = render(
      <Color
        color={{ name: '', hex: '' }}
        isSelected={false}
        onClick={jest.fn()}
      />
    )

    expect(container).toMatchSnapshot()
  })

  test('クリック時にコールバックが呼ばれるか', () => {
    const mock = jest.fn()
    const { getByTestId } = render(
      <Color
        color={{ name: '', hex: '' }}
        isSelected={false}
        onClick={mock}
        dataTestId="search-color-button"
      />
    )

    act(() => {
      fireEvent.click(getByTestId('search-color-button'))
    })

    expect(mock).toBeCalled()
  })
})
