import { Card, Flex, Text } from 'theme-ui'

export type Repo = {
  name: string
  ownerName: string
  starCount: number
}

export const SearchResult = ({ name = '', ownerName = '', starCount }: Repo) => (
  <Card
    key={`${name}-${ownerName}`}
    sx={{
      p: 2,
      display: 'flex',
      flexDirection: 'row',
      borderRadius: 4,
      boxShadow: '0 0 4px rgba(0, 0, 0, 0.125)',
    }}
  >
    <Flex sx={{ flex: '0.3', flexDirection: 'column' }}>
      <Text sx={{ fontWeight: 'bold' }}>{name}</Text>
      <Text>{ownerName}</Text>
    </Flex>
    <Flex sx={{ flex: '0.7', justifyContent: 'end' }}>Stars: {starCount}</Flex>
  </Card>
)
