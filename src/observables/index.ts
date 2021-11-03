/**
 * @file Observables - contains all observables used in the application
 *  to manage pieces of state accross the component tree.
 */
import { BehaviorSubject } from 'rxjs'

// the generated type does not extract the node into its own type
// TODO: get codegen to properly type these; many strings are any; unnecessary unions
export type RepoNode = {
  name: string
  url: string
  description?: string | null | undefined
  owner: { login: string; url: string; avatarUrl: string }
  stargazers: { totalCount: number }
  primaryLanguage?: { name: string } | null | undefined
}

// observables for routing and data between Search and Detail pages
export const repo$ = new BehaviorSubject<RepoNode | undefined>(undefined)
export const toRepo = repo$.next.bind(repo$)
export const page$ = new BehaviorSubject<'search' | 'detail'>('search')
export const toPage = page$.next.bind(page$)

// observables for Search and SearchField
export const input$ = new BehaviorSubject('')
export const toInput = input$.next.bind(input$)
export const sort$ = new BehaviorSubject<'stars' | 'default'>('default')
export const toSort = input$.next.bind(sort$)
