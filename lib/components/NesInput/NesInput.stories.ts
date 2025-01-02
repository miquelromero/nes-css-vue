import type { Meta, StoryObj } from '@storybook/vue3';
import { NesInput } from './index';

const meta: Meta<typeof NesInput> = {
  component: NesInput,
  title: 'Components/Input',
};
export default meta;

type Story = StoryObj<typeof NesInput>;

export const Docs: Story = {
  args: {
    placeholder: 'John Doe'
  },
  tags: ['!autodocs', '!dev'],
};

export const Default: Story = {
  args: {
    placeholder: 'John Doe',
    status: 'default',
  },
};

export const Success: Story = {
  args: {
    placeholder: 'John Doe',
    status: 'success',
  },
};

export const Warning: Story = {
  args: {
    placeholder: 'John Doe',
    status: 'warning',
  },
};

export const Error: Story = {
  args: {
    placeholder: 'John Doe',
    status: 'error',
  },
};

export const Dark: Story = {
  args: {
    placeholder: 'John Doe',
    dark: true,
  },
  parameters: {
    backgrounds: {
      default: 'Dark',
    },
  },
};

