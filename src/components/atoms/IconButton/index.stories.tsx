import { Meta, StoryObj } from '@storybook/react'
import { SearchIcon, CloudUploadIcon, PersonOutlineIcon } from './'

const meta: Meta<typeof SearchIcon> = {
  title: 'Atoms/IconButton',
  component: SearchIcon,
  argTypes: {
    color: {
      control: { type: 'string' },
      description: 'アイコン色',
      table: {
        type: { summary: 'ThemeColors' }
      }
    },
    backgroundColor: {
      control: { type: 'color' },
      description: '背景色',
      table: {
        type: { summary: 'string' }
      }
    },
    size: {
      control: { type: 'number' },
      description: 'アイコンのサイズ',
      table: {
        type: { summary: 'number' }
      }
    },
    onClick: {
      description: 'onClickイベントハンドラ',
      table: {
        type: { summary: 'function' }
      }
    }
  },
  args: {
    size: 24
  }
}
export default meta

type Story = StoryObj<typeof SearchIcon>

export const Normal: Story = {
  render: (args) => (
    <>
      <SearchIcon {...args} />
      <CloudUploadIcon {...args} />
      <PersonOutlineIcon {...args} />
    </>
  )
}
