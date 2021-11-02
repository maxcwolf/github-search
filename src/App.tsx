import { useQuery, useQueryClient, QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { request, gql } from 'graphql-request'
import { ThemeProvider } from 'theme-ui'
import { theme } from './theme/theme-default'
import { Search } from './pages/Search'

const endpoint = 'https://graphqlzero.almansi.me/api'

const queryClient = new QueryClient()

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Search />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  )
}
