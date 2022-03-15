import { render } from '@testing-library/react'

import { Idol } from 'types/idol'

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
    const idols: Idol[] = [
      {
        id: 'yuika_mitsumine_shinycolors',
        nameJa: '三峰結華',
        nameEn: 'Yuika Mitsumine',
        nameKana: 'みつみねゆいか',
        bland: 'ShinyColors',
        color: {
          rgb: 'rgb(59, 145, 196)',
          hsv: 'hsv(202, 70, 77)',
          hex: '#3B91C4',
          similar: '#00ffff'
        }
      },
      {
        id: 'iori_minase_765as',
        nameJa: '水瀬伊織',
        nameEn: 'Iori Minase',
        nameKana: 'みなせいおり',
        bland: '765AS',
        color: {
          rgb: 'rgb(253, 153, 225)',
          hsv: 'hsv(317, 40, 99)',
          hex: '#FD99E1',
          similar: '#ffffff'
        }
      },
      {
        id: 'miyu_mifune_cinderellagirls',
        nameJa: '三船美優',
        nameEn: 'Miyu Mifune',
        nameKana: 'みふねみゆ',
        bland: 'CinderellaGirls',
        color: {
          rgb: 'rgb(1, 170, 165)',
          hsv: 'hsv(178, 99, 67)',
          hex: '#01AAA5',
          similar: '#00ffff'
        }
      }
    ]

    const { container } = render(<ColorCards {...props} items={idols} />)

    expect(container).toMatchSnapshot()
  })
})
