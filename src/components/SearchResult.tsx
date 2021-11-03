/** @jsxImportSource theme-ui */
import { Card, Flex, Text } from 'theme-ui'
import { RepoNode } from '../observables'

export type SearchResultProps = {
  repo: RepoNode
  onClick: () => void
}

/**
 * @description SearchResult component - displays individual search results
 *  with minimal information, and can be clicked to bring user to the Details page.
 */
export const SearchResult = ({ repo, onClick }: SearchResultProps) => {
  return (
    <Card
      key={`${repo.name}-${repo.owner.login}`}
      sx={{
        mb: 2,
        p: 2,
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 4,
        boxShadow: '0 0 3px rgba(0, 0, 0, 0.125)',
        ':hover': { cursor: 'pointer' },
      }}
      onClick={onClick}
    >
      <Flex sx={{ flex: '0.3', flexDirection: 'column' }}>
        <Text sx={{ fontWeight: 'bold' }}>{repo.name}</Text>
        <Text>{repo.owner.login}</Text>
      </Flex>
      <Flex sx={{ flex: '0.7', justifyContent: 'end' }}>Stars: {repo.stargazers.totalCount}</Flex>
    </Card>
  )
}
