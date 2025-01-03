import type { Meta, StoryObj } from '@storybook/vue3';
import { NesAvatar } from './index';

const meta: Meta<typeof NesAvatar> = {
  component: NesAvatar,
  title: 'Components/Avatar',
};
export default meta;

type Story = StoryObj<typeof NesAvatar>;

const src = 'https://www.gravatar.com/avatar?s=15';

export const Small: Story = {
  args: {
    src,
    size: 'small',
  },
};

export const Default: Story = {
  args: {
    src,
    size: 'default',
  },
};

export const Medium: Story = {
  args: {
    src,
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    src,
    size: 'large',
  },
};

export const Rounded: Story = {
  args: {
    src,
    rounded: true,
  },
};

export const NotPixelated: Story = {
  args: {
    src,
    pixelated: false,
  },
};
