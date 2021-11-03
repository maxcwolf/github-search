import { act, renderHook } from '@testing-library/react-hooks'
import { BehaviorSubject, Subject, Observable } from 'rxjs'
import { useObservable } from '../useObservable'

const setup = <T,>(observable: Observable<T>, initialValue?: T) =>
  renderHook(() => useObservable(observable, initialValue))

describe('useObservable', () => {
  it('should return initial value on init', () => {
    const subject$ = new Subject()
    const { result } = setup(subject$, 'test')

    expect(result.current).toBe('test')
  })

  it('should return the value of the BehaviorSubject when no initialValue passed', () => {
    const behaviorSubject$ = new BehaviorSubject('test')
    const { result } = setup(behaviorSubject$)

    expect(result.current).toBe('test')
  })

  it('should return undefined if Subject or Observable passed with no initialValue', () => {
    const subject$ = new Subject()
    const { result: resultSub } = setup(subject$)

    const observable$ = new Observable()
    const { result: resultObs } = setup(observable$)

    expect(resultSub.current).toBeUndefined()
    expect(resultObs.current).toBeUndefined()
  })

  it('should return the most recent value of the observable', () => {
    const subject$ = new Subject()
    const { result } = setup(subject$, '')

    act(() => {
      subject$.next('test')
    })
    expect(result.current).toBe('test')

    act(() => {
      subject$.next('testing')
      subject$.next('testing 123')
    })
    expect(result.current).toBe('testing 123')
  })
})
