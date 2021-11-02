import { useEffect, useLayoutEffect, useState } from 'react'
import { BehaviorSubject, Subject, Observable } from 'rxjs'

/**
 * CreateFromObservable factory for fromObservable functions
 * example:
 * in ui/datagraph/myValue:
 * import {fromObservable} from 'ui/datagraph/shared'
 * const myValue = new BehaviorSubject(1) // or auto-generated
 * export const fromMyValue = fromObservable(myValue$)
 *
 * in ui/components/MyTextField:
 * import fromMyValue from 'datagraph/myValue'
 * export const MyTextField = TextField(value(fromMyValue))
 *
 * note:
 * observable and subject require initial value to render, even when they don't have a published value yet
 * the initial value prevents the "switching from controlled" error
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
