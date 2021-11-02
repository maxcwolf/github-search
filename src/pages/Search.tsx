import { isEmpty, isNil } from 'ramda'
import { Container, Divider, Flex, Spinner, Text } from 'theme-ui'
import { useGetReposQuery } from '../__generated__/graphql'
import { useObservable } from '../hooks/useObservable'
import { SearchField, input$, sort$ } from '../components/SearchField'
import { SearchResult } from '../components/SearchResult'

const getSearchInput = (sort: string, input: string) =>
  sort === 'stars' ? `sort:stars ${input}` : input

export const Search = () => {
  const input = useObservable(input$)
  const sort = useObservable(sort$)
  const { data, isLoading } = useGetReposQuery({ search_term: getSearchInput(sort, input) })

  return (
    <Container sx={{ height: 'screenHeight' }}>
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
          <Text>Repository Count: {data?.search.repositoryCount}</Text>
          {data &&
            data.search &&
            data.search.edges?.map(
              result =>
                // prettier-ignore
                !isEmpty(result?.node)
              // @ts-expect-error -- we are checking that result is not empty or nil, and there are default params for SearhResult
              && !isNil(result?.node) && <SearchResult key={`${result.node.name}-${result.node.owner?.login}`} name={result.node.name} ownerName={result.node.owner?.login || ''} starCount={result.node.stargazers?.totalCount} />
            )}
        </Flex>
      )}
    </Container>
  )
}
