import { Meta } from '@storybook/react'
import { SearchResult, SearchResultProps } from '../SearchResult'
import { RepoNode } from '../../observables'
export default {
  component: SearchResult,
  title: 'Components/SearchResult',
  argTypes: { onClick: { action: 'Repo Clicked - navigated to details page' } },
} as Meta

export const Default = (args: SearchResultProps) => <SearchResult {...args} />

Default.args = {
  repo: {
    name: 'Repository Name',
    owner: { login: 'Owner Name' },
    stargazers: { totalCount: 42 },
  },
} as Partial<RepoNode>
