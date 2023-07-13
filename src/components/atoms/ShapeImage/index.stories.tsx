import type { Meta, StoryObj } from '@storybook/react'
import ImageWithShape from './index'

const meta: Meta<typeof ImageWithShape> = {
  component: ImageWithShape,
  argTypes: {
    shape: {
      options: ['circle', 'square'],
      control: { type: 'radio' },
      description: '画像の形',
      table: {
        type: {
          summary: 'circle | square'
        },
        defaultValue: { summary: 'square' }
      }
    },
    src: {
      control: { type: 'text' },
      description: '画像URL',
      table: {
        type: { summary: 'string' }
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
    }
  }
}

export default meta

type Story = StoryObj<typeof ImageWithShape>

// 円形
export const Circle: Story = {
  args: {
    shape: 'circle',
    src: '/images/sample/sample1.jpg',
    width: 320,
    height: 320
  }
}

// 円形
export const Square: Story = {
  args: {
    shape: 'square',
    src: '/images/sample/sample1.jpg',
    width: 320,
    height: 320
  }
}
