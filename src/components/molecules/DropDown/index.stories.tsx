import { Meta, StoryObj } from '@storybook/react'
import DropDown from './index'

const meta: Meta<typeof DropDown> = {
  title: 'Molecules/DropDown',
  component: DropDown,
  argTypes: {
    options: {
      control: { type: 'array' },
      description: 'ドロップダウンの選択肢',
      table: {
        type: { summary: 'array' }
      }
    },
    hasError: {
      control: { type: 'boolean' },
      description: 'バリデーションエラーフラグ',
      table: {
        type: { summary: 'boolean' }
      }
    },
    placeholder: {
      control: { type: 'text' },
      description: 'プレースホルダ',
      table: {
        type: { summary: 'string' }
      }
    },
    value: {
      control: { type: 'text' },
      description: 'ドロップダウンの値',
      table: {
        type: { summary: 'string' }
      }
    },
    onChange: {
      description: '値が変化した時のイベントハンドラ',
      table: {
        type: { summary: 'function' }
      }
    }
  },
  args: {
    hasError: false
  }
}

export default meta

type Story = StoryObj<typeof DropDown>
export const Normal: Story = {
  args: {
    options: [
      { value: null, label: '-' },
      { value: 'one', label: 'One' },
      { value: 'two', label: 'Two' },
      { value: 'three', label: 'Three' }
    ],
    placeholder: 'Please select items from the list'
  }
}

// 初期値を設定
export const InitialValue: Story = {
  args: {
    options: [
      { value: null, label: '-' },
      { value: 'one', label: 'One' },
      { value: 'two', label: 'Two' },
      { value: 'three', label: 'Three' }
    ],
    placeholder: 'Please select items from the list',
    value: 'one'
  }
}

// 多くの要素を表示
export const Many: Story = {
  args: {
    options: Array.from(Array(20), (_v, k) => {
      return { value: k.toString(), label: k.toString() }
    }),
    placeholder: 'Please select items from the list',
    value: 'one'
  }
}
