import { useEffect, useLayoutEffect, useState } from 'react'
import { BehaviorSubject, Subject, Observable } from 'rxjs'

/**
 * @description CreateUseObservable factory for useObservable functions
 */
type CreateUseObservable = <EffectVariant extends typeof useEffect | typeof useLayoutEffect>(
  effectVariant: EffectVariant
) => {
  <T>(observable: BehaviorSubject<T>): T
  <T>(observable: Observable<T>, initialValue: T): T
  <T>(observable: Subject<T>, initialValue: T): T
}

const createUseObservable: CreateUseObservable =
  effectVariant =>
  (
    observable,
    // @ts-expect-error -- assigning value for behavior subject case
    initialValue = observable.value
  ) => {
    const [val, setValue] = useState(initialValue)
    effectVariant(() => {
      const subscription = observable.subscribe(setValue)
      return subscription.unsubscribe.bind(subscription)
    }, [observable])
    return val
  }

export const useObservable = createUseObservable(useEffect)
export const useLayoutObservable = createUseObservable(useLayoutEffect)
