import { act, fireEvent, render } from '@testing-library/react'

import { ColorDetail } from 'types/color-detail'

import CardDefault from './index'

describe('CardDefault', () => {
  const idol: ColorDetail = {
    id: 'yumi_aiba_cinderellagirls',
    nameJa: '相葉夕美',
    nameEn: 'Yumi Aiba',
    nameKana: 'あいばゆみ',
    brand: 'CinderellaGirls',
    color: {
      rgb: 'rgb(234, 226, 141)',
      hsv: 'hsv(55, 40, 92)',
      hex: '#EAE28D',
      similar: '#ffff00'
    }
  }

  test('Keepボタンを押したときにコールバックが呼ばれるか', () => {
    const mock = jest.fn()
    const { container, getByTestId } = render(
      <CardDefault
        data={idol}
        isKeep={false}
        onClickKeep={mock}
        onClickRemove={mock}
      />
    )

    act(() => {
      fireEvent.click(getByTestId('keep-button'))
    })

    expect(container).toMatchSnapshot()
    expect(mock).toBeCalled()
  })

  test('Removeボタンを押したときにコールバックが呼ばれるか', () => {
    const mock = jest.fn()
    const { container, getByTestId } = render(
      <CardDefault
        data={idol}
        isKeep={true}
        onClickKeep={mock}
        onClickRemove={mock}
      />
    )

    act(() => {
      fireEvent.click(getByTestId('remove-button'))
    })

    expect(container).toMatchSnapshot()
    expect(mock).toBeCalled()
  })
})
