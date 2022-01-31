import { Story, Meta } from '@storybook/react/types-6-0'
import Dropdown, { DropDownProps } from '.'

export default {
  title: 'Dropdown',
  component: Dropdown,
  args: {
    title: 'Dropdown',
    children: 'Content'
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<DropDownProps> = (args) => <Dropdown {...args} />
