import { ComponentStory } from '@storybook/react'
import Category from './index'
export default {
  title: 'Category',
  component: Category,
}
const Template: ComponentStory<typeof Category> = (args) => (
  <Category {...args} />
)
export const Default = Template.bind({})
Default.args = {
  category: 'フロントエンド',
}
