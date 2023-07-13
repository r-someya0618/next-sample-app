import type { Meta, StoryObj } from '@storybook/react'
import Input from './index'

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  argTypes: {
    placeholder: {
      control: { type: 'text' },
      description: 'プレースホルダ',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    hasBorder: {
      control: { type: 'boolean' },
      description: 'border flag',
      table: {
        type: { summary: 'boolean' }
      }
    },
    hasError: {
      control: { type: 'boolean' },
      description: 'validation error flag',
      table: {
        type: { summary: 'boolean' }
      }
    }
  }
}

export default meta

type Story = StoryObj<typeof Input>

export const Normal: Story = {}

// 円形
export const Error: Story = {
  args: {
    hasError: true
  }
}
