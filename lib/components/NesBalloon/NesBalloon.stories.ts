import type { Meta, StoryObj } from '@storybook/vue3';
import { NesBalloon } from './index';

const meta: Meta<typeof NesBalloon> = {
  component: NesBalloon,
  title: 'Components/NesBalloon',
};
export default meta;

type Story = StoryObj<typeof NesBalloon>;

export const FromLeft: Story = {
  args: {
    text: 'Hello CSS.ness, welcome to the Vue world',
  },
};

export const FromRight: Story = {
  args: {
    text: 'Hello CSS.ness, welcome to the Vue world',
    from: 'right',
  },
};

export const Dark: Story = {
  args: {
    text: 'Hello CSS.ness, welcome to the Vue world',
    dark: true,
  },
  parameters: {
    backgrounds: {
      default: 'Dark',
    },
  },
};
