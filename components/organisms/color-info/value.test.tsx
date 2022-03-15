import { act, fireEvent, render } from '@testing-library/react'

import ColorValue from './value'

describe('ColorValue', () => {
  beforeAll(() => {
    window.prompt = jest.fn()
  })

  test('クリックでアイコンが変化するか', async () => {
    const { getByTestId } = render(<ColorValue type="HEX" value="#F8C715" />)
    const button = getByTestId('copy-button')
    const prevInnerHTML = button.innerHTML

    act(() => {
      fireEvent.click(button)
    })

    expect(button.innerHTML).not.toBe(prevInnerHTML)
  })
})
