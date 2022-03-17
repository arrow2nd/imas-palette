import { render } from '@testing-library/react'

import { ColorDetail } from 'types/color-detail'

import ColorCards from './index'

describe('ColorCards', () => {
  const props = {
    className: '',
    keepIdList: [],
    onAddKeepId: jest.fn(),
    onRemoveKeepId: jest.fn()
  }

  test('カードが無いときの表示が正しいか', () => {
    const { getByText } = render(<ColorCards {...props} items={[]} />)
    expect(getByText('みつかりませんでした...')).toBeTruthy()
  })

  test('見た目が変化していないか', () => {
    const colorDetails: ColorDetail[] = [
      {
        id: 'yuika_mitsumine_shinycolors',
        name: '三峰結華',
        nameSuppl: 'Yuika Mitsumine',
        nameKana: 'みつみねゆいか',
        brand: 'ShinyColors',
        color: {
          rgb: 'rgb(59, 145, 196)',
          hsv: 'hsv(202, 70, 77)',
          hex: '#3B91C4',
          similar: '#00ffff'
        }
      },
      {
        id: 'iori_minase_765as',
        name: '水瀬伊織',
        nameSuppl: 'Iori Minase',
        nameKana: 'みなせいおり',
        brand: '765AS',
        color: {
          rgb: 'rgb(253, 153, 225)',
          hsv: 'hsv(317, 40, 99)',
          hex: '#FD99E1',
          similar: '#ffffff'
        }
      },
      {
        id: 'miyu_mifune_cinderellagirls',
        name: '三船美優',
        nameSuppl: 'Miyu Mifune',
        nameKana: 'みふねみゆ',
        brand: 'CinderellaGirls',
        color: {
          rgb: 'rgb(1, 170, 165)',
          hsv: 'hsv(178, 99, 67)',
          hex: '#01AAA5',
          similar: '#00ffff'
        }
      }
    ]

    const { container } = render(<ColorCards {...props} items={colorDetails} />)

    expect(container).toMatchSnapshot()
  })
})
