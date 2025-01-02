import type { Meta, StoryObj } from '@storybook/vue3';

import { NesButton } from './index';

const meta: Meta<typeof NesButton> = {
  component: NesButton,
  title: 'Components/Button',
  args: {
    label: 'Button',
  }
};
export default meta;

type Story = StoryObj<typeof NesButton>;

export const Normal: Story = {
  args: {
    variant: 'normal',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

