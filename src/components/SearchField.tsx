/** @jsxImportSource theme-ui */
import { useEffect, useRef, ChangeEvent } from 'react'
import { BehaviorSubject } from 'rxjs'
import { Flex, Input, Label, Radio, Text } from 'theme-ui'
import { useObservable } from '../hooks/useObservable'

// input observable to share state accross Search and SearchField
export const input$ = new BehaviorSubject('')
const toInput = input$.next.bind(input$)
export const sort$ = new BehaviorSubject<'stars' | 'default'>('default')
const toSort = input$.next.bind(sort$)

const onInputChange = (event: ChangeEvent<HTMLInputElement>) => toInput(event.target.value)

const onRadioChange = (event: ChangeEvent<HTMLInputElement>) => toSort(event.currentTarget.value)

export const SearchField = () => {
  const input = useObservable(input$)
  const sort = useObservable(sort$)

  const inputRef = useRef<HTMLInputElement | null>(null)

  // Focus search input on init render
  useEffect(() => {
    inputRef?.current?.focus()
  }, [])

  return (
    <Flex sx={{ flexDirection: 'column', mb: 2 }}>
      {/* TODO: make label font variant for this repeated style */}
      <Label htmlFor="search" sx={{ fontSize: 1, fontWeight: 'thin' }}>
        Search
      </Label>
      <Input
        id="search"
        name="search"
        variant="shadow"
        value={input}
        onChange={onInputChange}
        ref={inputRef}
        mb={2}
      />
      {/* TODO: Add toast message when error */}
      <Flex sx={{ px: 3, flexDirection: 'row', justifyContent: 'end' }}>
        <Text pr={2}>Sort By:</Text>
        <Flex>
          <Label htmlFor="sort-default" sx={{ fontSize: 1, fontWeight: 'thin', mx: 2 }}>
            <Radio
              id="sort-default"
              name="default"
              value="default"
              checked={sort === 'default'}
              onChange={onRadioChange}
            />
            Default
          </Label>
          <Label htmlFor="sort-stars" sx={{ fontSize: 1, fontWeight: 'thin', mx: 2 }}>
            <Radio
              id="sort-stars"
              name="stars"
              value="stars"
              checked={sort === 'stars'}
              onChange={onRadioChange}
            />
            Stars
          </Label>
        </Flex>
      </Flex>
    </Flex>
  )
}
