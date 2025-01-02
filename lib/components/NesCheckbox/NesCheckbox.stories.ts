import type { Meta, StoryObj } from '@storybook/vue3';

import { NesCheckbox } from './index';

const meta: Meta<typeof NesCheckbox> = {
  component: NesCheckbox,
  title: 'Components/Checkbox',
  args: {
    label: 'Enable',
  },
};
export default meta;

type Story = StoryObj<typeof NesCheckbox>;

export const Default: Story = {
  args: {},
};

export const Dark: Story = {
  args: {
    dark: true,
  },
  parameters: {
    backgrounds: {
      default: 'Dark',
    },
  },
};
