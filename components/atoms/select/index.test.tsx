import { fireEvent, render } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import Select from './index'

describe('Select', () => {
  test('値の変更時にコールバックが呼ばれるか', () => {
    const mock = jest.fn()
    const { getByTestId } = render(
      <Select onChange={mock}>
        <option value="opt1">option 1</option>
        <option value="opt2">option 2</option>
        <option value="opt3">option 3</option>
      </Select>
    )

    act(() => {
      const select = getByTestId('search-select')
      fireEvent.change(select, { target: { value: 'opt2' } })
    })

    expect(mock).toBeCalled()
  })
})
