import { Meta, StoryObj } from '@storybook/react'
import RectLoader from './index'

const meta: Meta<typeof RectLoader> = {
  title: 'Atoms/RectLoader',
  component: RectLoader,
  argTypes: {
    width: {
      control: { type: 'number' },
      defaultValue: 320,
      description: '横幅',
      table: {
        type: { summary: 'number' }
      }
    },
    height: {
      control: { type: 'number' },
      description: '縦幅',
      defaultValue: 320,
      table: {
        type: { summary: 'number' }
      }
    }
  },
  args: {
    width: 320,
    height: 320
  }
}
export default meta

type Story = StoryObj<typeof RectLoader>

export const Normal: Story = {}
