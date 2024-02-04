import { act, fireEvent, render } from '@testing-library/react'
import Button from './index'

describe('Button', () => {
  const mock = jest.fn()
  const { getByRole } = render(
    <Button onClick={mock}>
      <p>click</p>
    </Button>
  )
  const button = getByRole('button')

  test('クリック時にコールバックが呼ばれているか', () => {
    act(() => {
      fireEvent.click(button)
    })

    expect(mock).toBeCalled()
  })

  test('子要素が正しく表示されているか', () => {
    expect(button).toContainHTML('<p>click</p>')
  })
})
