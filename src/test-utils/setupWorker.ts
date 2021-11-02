import { graphql, setupWorker } from 'msw'
import { GetReposQuery, GetReposQueryVariables } from '../__generated__/graphql'
import { mockSearchData } from './db'

export const github = graphql.link('https://api.github.com/graphql')

export const handlers = [
  // Handles a "GetRepos" query
  github.query<GetReposQuery, GetReposQueryVariables>('GetRepos', (req, res, ctx) => {
    const { search_term } = req.variables
    console.log('QUERY HANDLER CALLED ')
    // When authenticated, respond with a query payload
    console.log({ search_term })
    return res(ctx.data(mockSearchData))
  }),
]

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...handlers)
