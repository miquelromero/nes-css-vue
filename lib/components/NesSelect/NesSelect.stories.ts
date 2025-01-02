import type { Meta, StoryObj } from '@storybook/vue3';
import { NesSelect } from './index';

const meta: Meta<typeof NesSelect> = {
  component: NesSelect,
  title: 'Components/Select',
  args: {
    options: [
      { label: 'Yes', value: 'yes' },
      { label: 'No', value: 'no' },
    ],
    placeholder: 'Select...',
  },
};
export default meta;

type Story = StoryObj<typeof NesSelect>;

export const Docs: Story = {
  args: {},
  tags: ['!autodocs', '!dev'],
};

export const Default: Story = {
  args: {
    status: 'default',
  },
};

export const Success: Story = {
  args: {
    status: 'success',
  },
};

export const Warning: Story = {
  args: {
    status: 'warning',
  },
};

export const Error: Story = {
  args: {
    status: 'error',
  },
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
