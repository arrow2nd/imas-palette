import { renderHook } from '@testing-library/react-hooks'

import { colors } from 'data/colors'

import { useColorData } from './useColorData'

describe('useColorData', () => {
  test('全てのブランドで検索できるか', () => {
    const { result } = renderHook(() => useColorData('', '', '', []))

    expect(result.current).toHaveLength(colors.length)
  })

  test.each`
    testName        | brand            | name            | similarColor | keeps                                                       | expected
    ${'ブランド名'} | ${'DearlyStars'} | ${''}           | ${''}        | ${[]}                                                       | ${['秋月涼', '日高愛', '水谷絵理']}
    ${'アイドル名'} | ${''}            | ${'菊地真'}     | ${''}        | ${[]}                                                       | ${['菊地真']}
    ${'ユニット名'} | ${''}            | ${'じゅぴたー'} | ${''}        | ${[]}                                                       | ${['Jupiter']}
    ${'色味'}       | ${'DearlyStars'} | ${''}           | ${'#ff0000'} | ${[]}                                                       | ${['日高愛']}
    ${'keep済み'}   | ${'keep'}        | ${''}           | ${'#800080'} | ${['mei_izumi_shinycolors', 'hinana_ichikawa_shinycolors']} | ${['和泉愛依']}
  `(
    '$testNameからの検索ができるか',
    ({ brand, name, similarColor, keeps, expected }) => {
      const { result } = renderHook(() =>
        useColorData(brand, name, similarColor, keeps)
      )

      expect(result.current.map((e) => e.name)).toEqual(expected)
    }
  )
})
