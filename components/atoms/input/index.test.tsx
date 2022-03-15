import { act, fireEvent, render } from '@testing-library/react'

import Input from './index'

describe('Input', () => {
  test('入力確定時にコールバックが呼ばれるか', () => {
    const mock = jest.fn()
    const { getByTestId } = render(
      <Input
        className=""
        placeholder=""
        onSubmit={mock}
        dataTestId="search-textbox"
      />
    )

    act(() => {
      const textbox = getByTestId('search-textbox')

      fireEvent.change(textbox, { target: { value: 'test' } })
      fireEvent.keyDown(textbox, { key: 'Enter', code: 'Enter', charCode: 13 })
    })

    expect(mock).toBeCalled()
  })

  test('プレースホルダが正しく設定されているか', () => {
    const { getByPlaceholderText } = render(
      <Input className="" placeholder="placeholder" onSubmit={jest.fn()} />
    )

    expect(getByPlaceholderText('placeholder')).toBeTruthy()
  })
})
