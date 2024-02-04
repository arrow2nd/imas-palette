import { act, fireEvent, render, waitFor } from '@testing-library/react'
import ColorValue from './value'

describe('ColorValue', () => {
  const mock = jest.fn()

  beforeAll(() => {
    Object.assign(navigator, {
      clipboard: {
        writeText: mock
      }
    })
  })

  test('クリックで値がコピーされるか', async () => {
    const { getByTestId } = render(<ColorValue type="HEX" value="#F8C715" />)
    const button = getByTestId('copy-button')

    act(() => {
      fireEvent.click(button)
    })

    await waitFor(() => expect(mock).toBeCalled())
  })
})
