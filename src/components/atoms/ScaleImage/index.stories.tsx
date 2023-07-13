import { Meta, StoryObj } from '@storybook/react'
import ScaleImage from './index'

const meta: Meta<typeof ScaleImage> = {
  title: 'Atoms/ScaleImage',
  component: ScaleImage,
  argTypes: {
    src: {
      control: { type: 'text' },
      description: '画像URL',
      table: {
        type: { summary: 'string' }
      }
    },
    width: {
      control: { type: 'number' },
      description: '画像の横幅',
      table: {
        type: { summary: 'number' }
      }
    },
    height: {
      control: { type: 'number' },
      description: '画像の縦幅',
      table: {
        type: { summary: 'number' }
      }
    },
    containerWidth: {
      control: { type: 'text' },
      description: '横幅',
      table: {
        type: { summary: 'text' }
      }
    },
    containerHeight: {
      control: { type: 'text' },
      description: '縦幅',
      table: {
        type: { summary: 'text' }
      }
    }
  },
  args: {
    width: 320,
    height: 320,
    containerWidth: '320px',
    containerHeight: '320px'
  }
}

export default meta

type Story = StoryObj<typeof ScaleImage>
export const Normal: Story = {
  args: {
    src: '/images/sample/sample1.jpg'
  }
}
