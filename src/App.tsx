import { QueryCache, QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import toast from 'react-hot-toast'
import { ThemeProvider } from 'theme-ui'
import { theme } from './theme/theme-default'
import { Search } from './pages/Search'
import { Layout } from './components/Layout'
import { useObservable } from './hooks'
import { Detail } from './pages/Detail'
import { page$ } from './observables'

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      if (query.state.data !== undefined) {
        toast.error(`Oops! Something went wrong: ${error}`)
      }
    },
  }),
})

export const App = () => {
  const page = useObservable(page$)
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Layout>{page === 'search' ? <Search /> : <Detail />}</Layout>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  )
}
