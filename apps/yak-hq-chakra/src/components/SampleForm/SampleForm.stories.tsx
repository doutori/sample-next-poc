import type { Meta, StoryObj } from '@storybook/react'
import { SampleForm } from './index'

const meta: Meta<typeof SampleForm> = {
  title: 'Components/SampleForm',
  component: SampleForm,
}

export default meta

type Story = StoryObj<typeof SampleForm>
export const Default: Story = {
  args: {},
}
