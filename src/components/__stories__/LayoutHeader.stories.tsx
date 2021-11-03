import { Meta } from '@storybook/react'
import { LayoutHeader } from '../LayoutHeader'

export default {
  component: LayoutHeader,
  title: 'Components/LayoutHeader',
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta

export const Default = () => <LayoutHeader />
