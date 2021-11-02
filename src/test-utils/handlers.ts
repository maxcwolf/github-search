import { graphql } from 'msw'
import { mockSearchData } from './db'

// export const github = graphql.link('https://api.github.com/graphql')

export const handlers = [
  // Handles a "GetRepos" query
  graphql.query('GetRepos', (req, res, ctx) => {
    const { search_term } = req.variables

    // When authenticated, respond with a query payload
    if (search_term.length > 1) {
      return res(ctx.data(mockSearchData))
    }
  }),
]
