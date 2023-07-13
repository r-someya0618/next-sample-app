import { Meta } from '@storybook/react'
import BreadcrumbItem from './index'

const meta: Meta<typeof BreadcrumbItem> = { title: 'Atoms/BreadcrumbItem' }

export default meta

export const Standard = () => (
  <div>
    <BreadcrumbItem>Item 1</BreadcrumbItem>
    <BreadcrumbItem>Item 2</BreadcrumbItem>
    <BreadcrumbItem>Item 3</BreadcrumbItem>
  </div>
)
