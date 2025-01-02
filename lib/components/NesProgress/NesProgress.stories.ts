import type { Meta, StoryObj } from '@storybook/vue3';
import { NesProgress } from './index';

const meta: Meta<typeof NesProgress> = {
  component: NesProgress,
  title: 'Components/Progress',
};
export default meta;

type Story = StoryObj<typeof NesProgress>;

export const Docs: Story = {
  args: {
    max: 100,
    value: 60,
  },
  tags: ['!autodocs', '!dev'],
};

export const Default: Story = {
  args: {
    max: 100,
    value: 60,
    variant: 'default',
  },
};

export const Primary: Story = {
  args: {
    max: 100,
    value: 60,
    variant: 'primary',
  },
};

export const Success: Story = {
  args: {
    max: 100,
    value: 60,
    variant: 'success',
  },
};

export const Warning: Story = {
  args: {
    max: 100,
    value: 60,
    variant: 'warning',
  },
};

export const Error: Story = {
  args: {
    max: 100,
    value: 60,
    variant: 'error',
  },
};

export const Pattern: Story = {
  args: {
    max: 100,
    value: 60,
    variant: 'pattern',
  },
};
