// Replace your-renderer with the renderer you are using (e.g., react, vue3, etc.)
import type { Meta, StoryObj } from '@storybook/vue3';

import { NesContainer } from './index';

const meta: Meta<typeof NesContainer> = {
  component: NesContainer,
  title: 'Components/Container',
  args: {
    text: `All boys leave home someday.`,
    title: 'Mum',
  },
};
export default meta;

type Story = StoryObj<typeof NesContainer>;

export const Default: Story = {
  args: {
  },
};

export const WithoutTitle: Story = {
  args: {
    title: undefined,
  },
};

export const Rounded: Story = {
  args: {
    title: 'Mum',
    rounded: true,
  },
};

export const Centered: Story = {
  args: {
    title: 'Mum',
    centered: true,
  },
};

export const Dark: Story = {
  args: {
    title: 'Mum',
    dark: true,
  },
  parameters: {
    backgrounds: {
      default: 'Dark',
    },
  },
};
