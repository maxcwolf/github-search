import { useEffect, useState, useRef, ChangeEvent } from 'react'
import { Flex, Input, Label, Text, Spinner } from 'theme-ui'
import { isEmpty, isNil } from 'ramda'
import { useGetReposQuery } from '../__generated__/graphql'

export const SearchField = () => {
  const [input, setInput] = useState<string>('')
  const { data, isLoading } = useGetReposQuery({ search_term: input })

  const inputRef = useRef<HTMLInputElement | null>(null)

  // Focus search input on init render
  useEffect(() => {
    inputRef?.current?.focus()
  }, [])

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }
  return (
    <Flex sx={{ flexDirection: 'column' }}>
      {/* TODO: Font Weights are not applying correctly from theme - submit github issue */}
      <Label htmlFor="search" sx={{ fontSize: 1, fontWeight: 300 }}>
        Search
      </Label>
      <Input
        id="search"
        name="search"
        variant="shadow"
        value={input}
        onChange={onChange}
        ref={inputRef}
      />
      {/* TODO: Add toast message when error */}
      {isLoading ? (
        <Flex sx={{ justifyContent: 'center', alignContent: 'center' }}>
          <Spinner />
        </Flex>
      ) : (
        <Flex sx={{ flexDirection: 'column' }}>
          <Text>Repository Count: {data?.search.repositoryCount}</Text>
          {data?.search.edges?.map(
            result =>
              // prettier-ignore
              !isEmpty(result?.node)
              // @ts-expect-error -- we are checking is result.node is empty or nullish
              && !isNil(result?.node) && <Text key={`${result.node.name}-${result?.node.owner.login}`}>Name: {result.node.name}</Text>
          )}
        </Flex>
      )}
    </Flex>
  )
}
