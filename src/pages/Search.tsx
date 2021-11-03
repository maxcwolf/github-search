/** @jsxImportSource theme-ui */
import { isEmpty, isNil } from 'ramda'
import { Divider, Flex, Spinner, Text } from 'theme-ui'
import { useGetReposQuery } from '../__generated__/graphql'
import { useDebounce, useObservable } from '../hooks'
import { SearchField } from '../components/SearchField'
import { SearchResult } from '../components/SearchResult'
import { RepoNode, input$, sort$, toRepo, toPage } from '../observables'

export const getSearchInput = (sort: 'stars' | 'default', input: string) =>
  sort === 'stars' ? `sort:stars ${input}` : input

export const onPageNavigate = (page: 'detail' | 'search', repo?: RepoNode) => {
  toRepo(repo)
  toPage(page)
}

export const Search = () => {
  const input = useObservable(input$)
  const sort = useObservable(sort$)
  const debouncedInput = useDebounce(input, 400)
  const { data, isLoading } = useGetReposQuery({
    search_term: getSearchInput(sort, debouncedInput),
  })

  return (
    <>
      <SearchField />
      <Divider />
      {isLoading ? (
        <Flex sx={{ justifyContent: 'center', alignContent: 'center' }}>
          <Flex />
          <Spinner />
          <Flex />
        </Flex>
      ) : (
        <Flex sx={{ flexDirection: 'column' }}>
          <Text pb={3}>
            Matching Repos:{' '}
            <Text sx={{ fontWeight: 'semibold', fontStyle: 'italic' }}>
              {data?.search.repositoryCount}
            </Text>
          </Text>
          {data &&
            data.search &&
            data.search.edges?.map(
              result =>
                // prettier-ignore
                !isEmpty(result?.node)
                // @ts-expect-error -- we are checking that result is not empty or nil, generated types are bad, and there are default params for SearhResult
                && !isNil(result?.node) && <SearchResult onClick={() => onPageNavigate('detail', result?.node)} key={`${result.node.name}-${result.node.owner?.login}`} repo={result.node} />
            )}
        </Flex>
      )}
    </>
  )
}
