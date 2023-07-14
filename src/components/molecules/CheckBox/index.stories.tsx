import { Meta, StoryObj } from '@storybook/react'
import CheckBox from './index'

const meta: Meta<typeof CheckBox> = {
  title: 'Molecules/CheckBox',
  component: CheckBox,
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'ラベル',
      table: {
        type: { summary: 'text' }
      }
    },
    checked: {
      control: { type: 'boolean' },
      description: 'チェック',
      table: {
        type: { summary: 'boolean' }
      }
    },
    onChange: {
      description: '値が変化した時のイベントハンドラ',
      table: {
        type: { summary: 'function' }
      }
    }
  }
}

export default meta

type Story = StoryObj<typeof CheckBox>
export const WithLabel: Story = {
  args: {
    label: 'label'
  }
}
