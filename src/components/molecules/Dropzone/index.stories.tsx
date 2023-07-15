import { Meta, StoryObj } from '@storybook/react'
import Dropzone from './index'
import Button from '@/components/atoms/Button'
import Box from '@/components/layout/Box'
import { useEffect, useState } from 'react'

const meta: Meta<typeof Dropzone> = {
  title: 'Molecules/Dropzone',
  component: Dropzone,
  argTypes: {
    height: {
      control: { type: 'number' },
      description: '高さ',
      table: {
        type: { summary: 'number' }
      }
    },
    width: {
      control: { type: 'number' },
      description: '横幅',
      table: {
        type: { summary: 'number' }
      }
    },
    hasError: {
      control: { type: 'boolean' },
      description: 'バリデーションエラーフラグ',
      table: {
        type: { summary: 'boolean' }
      }
    },
    acceptedFileTypes: {
      options: {
        control: { type: 'array' },
        description: '受け付けるファイルタイプ',
        table: {
          type: { summary: 'array' }
        }
      }
    },
    onDrop: {
      description: 'ファイルがドロップ入力された時のイベントハンドラ',
      table: {
        type: { summary: 'function' }
      }
    },
    onChange: {
      description: 'ファイルが入力された時のイベントハンドラ',
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

type Story = StoryObj<typeof Dropzone>

const Template: Story = (args) => {
  const [files, setFiles] = useState<File[]>([])
  const handleDrop = (files: File[]) => {
    setFiles(files)
    args && args.onDrop && args.onDrop(files)
  }

  const fetchData = async () => {
    const res = await fetch('/images/sample/sample1.jpg')
    const blob = await res.blob()
    const file = new File([blob], 'sample1.png', blob)

    setFiles([...files, file])
  }

  const clearImages = () => {
    setFiles([])
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Box marginBottom={1}>
        <Dropzone {...args} value={files} onDrop={handleDrop} />
      </Box>
      <Box marginBottom={1}>
        <Button onClick={fetchData}>画像を追加</Button>
      </Box>
      <Box marginBottom={2}>
        <Button onClick={clearImages}>すべての画像をクリア</Button>
      </Box>
      <Box>
        {files.map((f, i) => {
          // eslint-disable-next-line @/next/next/no-img-element
          ;<img
            src={URL.createObjectURL(f)}
            width="100px"
            key={i}
            alt="sample"
          />
        })}
      </Box>
    </>
  )
}

// export const Normal: Story = {
//   args: {
//     options: [
//       { value: null, label: '-' },
//       { value: 'one', label: 'One' },
//       { value: 'two', label: 'Two' },
//       { value: 'three', label: 'Three' }
//     ],
//     placeholder: 'Please select items from the list'
//   }
// }

// // 初期値を設定
// export const InitialValue: Story = {
//   args: {
//     options: [
//       { value: null, label: '-' },
//       { value: 'one', label: 'One' },
//       { value: 'two', label: 'Two' },
//       { value: 'three', label: 'Three' }
//     ],
//     placeholder: 'Please select items from the list',
//     value: 'one'
//   }
// }

// // 多くの要素を表示
// export const Many: Story = {
//   args: {
//     options: Array.from(Array(20), (_v, k) => {
//       return { value: k.toString(), label: k.toString() }
//     }),
//     placeholder: 'Please select items from the list',
//     value: 'one'
//   }
// }
