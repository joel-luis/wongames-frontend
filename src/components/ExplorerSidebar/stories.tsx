import { Story, Meta } from '@storybook/react/types-6-0'
import ExplorerSidebar, { ExploreSidebarProps } from '.'

import items from 'components/ExplorerSidebar/mock'

export default {
  title: 'ExplorerSidebar',
  component: ExplorerSidebar,
  args: { items },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<ExploreSidebarProps> = (args) => (
  <div style={{ padding: 16, maxWidth: 320 }}>
    <ExplorerSidebar {...args} />
  </div>
)

export const WithInitialValues: Story<ExploreSidebarProps> = (args) => (
  <div style={{ padding: 16, maxWidth: 320 }}>
    <ExplorerSidebar
      {...args}
      initialValues={{ windows: true, sort_by: 'low-to-high' }}
    />
  </div>
)
