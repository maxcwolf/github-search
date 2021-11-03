import { Meta } from '@storybook/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Search } from '../Search'

export default {
  component: Search,
  title: 'Pages/Search',
} as Meta

const defaultQueryClient = new QueryClient()

export const Default = () => (
  <QueryClientProvider client={defaultQueryClient}>
    <Search />
  </QueryClientProvider>
)
