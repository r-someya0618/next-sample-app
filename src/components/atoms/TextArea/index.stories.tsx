import type { Meta, StoryObj } from '@storybook/react'
import TextArea from './index'

const meta: Meta<typeof TextArea> = {
  title: 'Atoms/TextArea',
  component: TextArea,
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
    rows: {
      control: { type: 'number' },
      description: '行数',
      table: {
        type: { summary: 'number' }
      }
    },
    minRows: {
      control: { type: 'number' },
      description: '最小行数',
      table: {
        type: { summary: 'number' }
      }
    },
    maxRows: {
      control: { type: 'number' },
      description: '最大行数',
      table: {
        type: { summary: 'number' }
      }
    },
    hasError: {
      control: { type: 'boolean' },
      description: 'validation error flag',
      table: {
        type: { summary: 'boolean' }
      }
    },
    onChange: {
      description: 'イベントハンドラ',
      table: {
        type: { summary: 'function' }
      }
    }
  },
  // default値
  args: {
    rows: 5,
    minRows: 5,
    maxRows: 10,
    hasError: false
  }
}

export default meta

type Story = StoryObj<typeof TextArea>

export const Normal: Story = {}

export const Error: Story = {
  args: {
    hasError: true
  }
}
