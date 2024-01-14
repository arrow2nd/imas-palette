import { act, fireEvent, render } from '@testing-library/react'

import UI from './index'

describe('UI', () => {
  const keyDownEnter = {
    key: 'Enter',
    code: 'Enter',
    charCode: 13
  }

  test('検索結果がない場合の表示が正しいか', () => {
    const { getByText, getByTestId } = render(<UI />)

    act(() => {
      fireEvent.change(getByTestId('search-textbox'), {
        target: { value: 'テスト' }
      })
      fireEvent.click(getByTestId('search-button'))
    })

    expect(getByText('見つかりませんでした…')).toBeTruthy()
  })

  test('ブランドから検索ができるか', () => {
    const { getByText, getByTestId } = render(<UI />)

    act(() => {
      fireEvent.change(getByTestId('search-select'), {
        target: { value: 'DearlyStars' }
      })
    })

    expect(getByText('秋月涼')).toBeTruthy()
    expect(getByText('日高愛')).toBeTruthy()
    expect(getByText('水谷絵理')).toBeTruthy()
  })

  test('アイドル名から検索できるか', () => {
    const { getByText, getByTestId } = render(<UI />)

    act(() => {
      const textbox = getByTestId('search-textbox')

      fireEvent.change(textbox, { target: { value: '智代子' } })
      fireEvent.keyDown(textbox, keyDownEnter)
    })

    expect(getByText('園田智代子')).toBeTruthy()
  })

  test('色味での絞込ができるか', async () => {
    const { getByText, getByTestId } = render(<UI />)

    act(() => {
      const textbox = getByTestId('search-textbox')

      fireEvent.change(textbox, { target: { value: '菊' } })
      fireEvent.keyDown(textbox, keyDownEnter)
      fireEvent.click(getByTestId('search-color-button-8'))
    })

    expect(getByText('白菊ほたる')).toBeTruthy()
  })
})
