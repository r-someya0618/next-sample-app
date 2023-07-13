import type { Meta, StoryObj } from '@storybook/react'
import Button from './index'

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
      description: 'Button variant',
      table: {
        type: { summary: 'primary| secondary' },
        defaultValue: { summary: 'primary' }
      }
    },
    children: {
      control: { type: 'text' },
      description: 'ボタンテキスト',
      table: {
        type: { summary: 'string' }
      }
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabledフラグ',
      table: {
        type: { summary: 'boolean' }
      }
    },
    width: {
      control: { type: 'number' },
      description: '横幅',
      table: {
        type: { summary: 'number' }
      }
    },
    height: {
      control: { type: 'number' },
      description: '高さ',
      table: {
        type: { summary: 'number' }
      }
    },
    onClick: {
      description: 'イベントハンドラ',
      table: {
        type: { summary: 'function' }
      }
    }
  }
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button'
  }
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button'
  }
}

export const Disabled: Story = {
  args: {
    variant: 'primary',
    children: 'Disabled Button',
    disabled: true
  }
}
