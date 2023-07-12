import type { Meta, StoryObj } from '@storybook/react'
import Text from './index'

const meta: Meta<typeof Text> = {
  component: Text,
  argTypes: {
    variant: {
      options: [
        'extraSmall',
        'small',
        'medium',
        'mediumLarge',
        'large',
        'extraLarge'
      ],
      control: { type: 'select' },
      description: 'text variant',
      table: {
        type: {
          summary: 'extraSmall, small, medium, mediumLarge, large, extraLarge'
        },
        defaultValue: { summary: 'medium' }
      }
    },
    children: {
      control: { type: 'text' },
      description: 'テキスト',
      table: {
        type: { summary: 'string' }
      }
    },
    fontWeight: {
      control: { type: 'text' },
      description: 'フォントの太さ',
      table: {
        type: { summary: 'string' }
      }
    },
    lineHeight: {
      control: { type: 'text' },
      description: '行の高さ',
      table: {
        type: { summary: 'string' }
      }
    },
    color: {
      control: { type: 'color' },
      description: 'テキストの色',
      table: {
        type: { summary: 'string' }
      }
    },
    backgroundColor: {
      control: { type: 'color' },
      description: '背景色',
      table: {
        type: { summary: 'string' }
      }
    },
    margin: {
      control: { type: 'number' },
      description: 'margin',
      table: {
        type: { summary: 'number' }
      }
    },
    marginTop: {
      control: { type: 'number' },
      description: 'margin-top',
      table: {
        type: { summary: 'number' }
      }
    },
    marginRight: {
      control: { type: 'number' },
      description: 'margin-right',
      table: {
        type: { summary: 'number' }
      }
    },
    marginBottom: {
      control: { type: 'number' },
      description: 'margin-bottom',
      table: {
        type: { summary: 'number' }
      }
    },
    marginLeft: {
      control: { type: 'number' },
      description: 'margin-left',
      table: {
        type: { summary: 'number' }
      }
    },
    padding: {
      control: { type: 'number' },
      description: 'padding',
      table: {
        type: { summary: 'number' }
      }
    },
    paddingTop: {
      control: { type: 'number' },
      description: 'padding-top',
      table: {
        type: { summary: 'number' }
      }
    },
    paddingRight: {
      control: { type: 'number' },
      description: 'padding-right',
      table: {
        type: { summary: 'number' }
      }
    },
    paddingBottom: {
      control: { type: 'number' },
      description: 'padding-bottom',
      table: {
        type: { summary: 'number' }
      }
    },
    paddingLeft: {
      control: { type: 'number' },
      description: 'padding-left',
      table: {
        type: { summary: 'number' }
      }
    }
  }
}

export default meta

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
 ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
 ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
   cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
    est laborum.`

type Story = StoryObj<typeof Text>

export const ExtraSmall: Story = {
  args: {
    variant: 'extraSmall',
    children: longText
  }
}

export const Small: Story = {
  args: {
    variant: 'small',
    children: longText
  }
}

export const Medium: Story = {
  args: {
    variant: 'medium',
    children: longText
  }
}
export const MediumLarge: Story = {
  args: {
    variant: 'mediumLarge',
    children: longText
  }
}
export const Large: Story = {
  args: {
    variant: 'large',
    children: longText
  }
}
export const ExtraLarge: Story = {
  args: {
    variant: 'extraLarge',
    children: longText
  }
}
