import { theme } from '@/styles/theme'
import { ComponentStory } from '@storybook/react'
import Arrow from './index'

export default {
  title: 'Arrow',
  component: Arrow,
}

const Template: ComponentStory<typeof Arrow> = (args) => {
  return (
    <div
      style={{
        backgroundColor: theme.color.main,
        width: '100vw',
        height: '100vh',
        padding: 0,
      }}
    >
      <Arrow {...args} />
    </div>
  )
}

export const Right = Template.bind({})

Right.args = {
  position: 'right',
}

export const Left = Template.bind({})

Left.args = {
  position: 'left',
}
