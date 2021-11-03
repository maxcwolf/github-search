import { act, renderHook } from '@testing-library/react-hooks'
import { useDebounce } from '../useDebounce'

describe('useDebounce', () => {
  beforeAll(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.clearAllTimers()
  })

  afterAll(() => {
    jest.useRealTimers()
  })

  const setup = <T,>(value: T, delay: number) => renderHook(() => useDebounce(value, delay))

  // TODO: Get this test working :(
  xit('should update value after specified delay', () => {
    const { result, rerender } = setup('', 500)
    expect(result.current).toBe('')
    act(() => {
      jest.advanceTimersByTime(510)
    })
    expect(result.current).toBe('')

    rerender({ value: 'testing', delay: 500 })

    expect(result.current).toBe('')
    act(() => {
      jest.advanceTimersByTime(600)
    })
    expect(result.current).toBe('testing')
  })
})
