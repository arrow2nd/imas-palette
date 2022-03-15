import { act } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'

import { useKeepId } from './useKeepId'

describe('useKeepId', () => {
  beforeAll(() => {
    localStorage.setItem('imas-palette', 'read-test-id')
  })

  afterAll(() => {
    localStorage.clear()
  })

  test('取得できるか', () => {
    const { result } = renderHook(() => useKeepId())
    const [keepIds] = result.current

    expect(keepIds).toEqual(['read-test-id'])
  })

  test('追加できるか', () => {
    const { result, rerender } = renderHook(() => useKeepId())

    act(() => {
      const [, handleAddKeepId] = result.current
      handleAddKeepId('add-test-id')
    })

    rerender()

    const [keepIds] = result.current
    expect(keepIds).toEqual(['read-test-id', 'add-test-id'])
  })

  test('削除できるか', () => {
    const { result, rerender } = renderHook(() => useKeepId())

    act(() => {
      const [, , handleRemoveKeepId] = result.current
      handleRemoveKeepId('read-test-id')
    })

    rerender()

    const [keepIds] = result.current
    expect(keepIds).toEqual(['add-test-id'])
  })
})
