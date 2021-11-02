import { Meta } from '@storybook/react'
import { SearchResult, Repo } from '../SearchResult'

export default {
  component: SearchResult,
  title: 'Components/SearchResult',
} as Meta

export const Default = (args: Repo) => <SearchResult {...args} />

Default.args = {
  name: 'Repository Name',
  ownerName: 'Owner Name',
  starCount: 42,
}
