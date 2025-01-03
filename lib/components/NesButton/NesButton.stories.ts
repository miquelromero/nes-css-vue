import type { Meta, StoryObj } from '@storybook/vue3';
import { NesButton } from './index';

const meta: Meta<typeof NesButton> = {
  component: NesButton,
  title: 'Components/Button',
};
export default meta;

type Story = StoryObj<typeof NesButton>;

export const Normal: Story = {
  args: {
    label: 'Normal',
    variant: 'normal',
  },
};

export const Primary: Story = {
  args: {
    label: 'Primary',
    variant: 'primary',
  },
};

export const Success: Story = {
  args: {
    label: 'Success',
    variant: 'success',
  },
};

export const Warning: Story = {
  args: {
    label: 'Warning',
    variant: 'warning',
  },
};

export const Error: Story = {
  args: {
    label: 'Error',
    variant: 'error',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    disabled: true,
  },
};
