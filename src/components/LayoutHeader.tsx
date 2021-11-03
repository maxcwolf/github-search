/** @jsxImportSource theme-ui */
import { Avatar, Container, Flex, Text } from 'theme-ui'
import { onPageNavigate } from '../pages/Search'

export const LayoutHeader = () => (
  <Container sx={{ p: 2 }}>
    <Flex>
      <Avatar
        width={60}
        height={60}
        src="octocat.png"
        onClick={() => onPageNavigate('search')}
        sx={{ ':hover': { cursor: 'pointer' } }}
      />
      <Text
        sx={{
          font: 'heading',
          fontWeight: 'heading',
          fontSize: 4,
          pl: 2,
          ':hover': { cursor: 'pointer' },
        }}
        onClick={() => onPageNavigate('search')}
      >
        RepoSearch
      </Text>
    </Flex>
  </Container>
)
