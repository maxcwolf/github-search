import { Meta, Story } from '@storybook/react'
import { SearchField } from '../SearchField'
import { QueryClient, QueryClientProvider } from 'react-query'
import { worker, github } from '../../test-utils/setupWorker'
import { graphql } from 'msw'

export default {
  component: SearchField,
  title: 'Components/SearchField',
  // decorators: [
  //   Story => {
  //     // Reset request handlers added in individual stories.
  //     worker.resetHandlers()
  //     return <Story />
  //   },
  // ],
} as Meta

const mockedQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
})

const defaultQueryClient = new QueryClient()

export const Default = () => (
  <QueryClientProvider client={defaultQueryClient}>
    <SearchField />
  </QueryClientProvider>
)

export const Loading = () => (
  <QueryClientProvider client={mockedQueryClient}>
    <SearchField />
  </QueryClientProvider>
)
Loading.decorators = [
  (Story: Story<unknown>) => {
    worker.use(
      github.query('GetRepos', (req, res, ctx) => {
        console.log({ req, res, ctx })
        // Mock an infinite loading state.
        return res(ctx.delay('infinite'))
      })
    )
    return <Story />
  },
]

export const Error = () => (
  <QueryClientProvider client={mockedQueryClient}>
    <SearchField />
  </QueryClientProvider>
)
Error.decorators = [
  (Story: Story<unknown>) => {
    worker.use(
      github.query(/g/, (req, res, ctx) =>
        // Mock an error state.
        res.once(ctx.status(500))
      )
    )
    return <Story />
  },
]

// MSW_STORYBOOK_ADDON ATTEMPT

// const defaultQueryClient = new QueryClient()

// export const Default = () => (
//   <QueryClientProvider client={defaultQueryClient}>
//     <SearchField />
//   </QueryClientProvider>
// )

// const mockedQueryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       retry: false,
//     },
//   },
// })

// export const Loading = () => (
//   <QueryClientProvider client={mockedQueryClient}>
//     <SearchField />
//   </QueryClientProvider>
// )

// Loading.parameters = {
//   msw: [
//     graphql.query('GetRepos', (req, res, ctx) =>
//       // Mock an infinite loading state.
//       res(ctx.delay('infinite'))
//     ),
//   ],
// }

// export const Error = () => (
//   <QueryClientProvider client={mockedQueryClient}>
//     <SearchField />
//   </QueryClientProvider>
// )
// Error.decorators = {
//   mw: [
//     graphql.query('GetRepos', (req, res, ctx) =>
//       // Mock an error state.
//       res.once(ctx.status(500))
//     ),
//   ],
// }
