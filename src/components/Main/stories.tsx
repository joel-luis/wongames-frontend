import { Story, Meta } from '@storybook/react/types-6-0'

import Main from './index'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJs, Styled Components '
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />
