import { Meta } from '@storybook/react'
import Separator from './index'

const meta: Meta<typeof Separator> = {
  title: 'Atoms/Separator'
}
export default meta

export const Standard = () => (
  <>
    <Separator>or</Separator>
    <Separator>and</Separator>
    <Separator />
  </>
)
