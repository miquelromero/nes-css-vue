import type { Meta, StoryObj } from '@storybook/vue3';
import { NesTextarea } from './index';

const meta: Meta<typeof NesTextarea> = {
  component: NesTextarea,
  title: 'Components/Textarea',
};
export default meta;

type Story = StoryObj<typeof NesTextarea>;

export const Docs: Story = {
  args: {
    placeholder: 'Tell us something about you...'
  },
  tags: ['!autodocs', '!dev'],
};

export const Default: Story = {
  args: {
    placeholder: 'Tell us something about you...',
    status: 'default',
  },
};

export const Success: Story = {
  args: {
    placeholder: 'Tell us something about you...',
    status: 'success',
  },
};

export const Warning: Story = {
  args: {
    placeholder: 'Tell us something about you...',
    status: 'warning',
  },
};

export const Error: Story = {
  args: {
    placeholder: 'Tell us something about you...',
    status: 'error',
  },
};

export const Dark: Story = {
  args: {
    placeholder: 'Tell us something about you...',
    dark: true,
  },
  parameters: {
    backgrounds: {
      default: 'Dark',
    },
  },
};

