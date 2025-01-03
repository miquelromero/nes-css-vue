// Replace your-renderer with the renderer you are using (e.g., react, vue3, etc.)
import type { Meta, StoryObj } from '@storybook/vue3';
import { NesContainer } from './index';

const meta: Meta<typeof NesContainer> = {
  component: NesContainer,
  title: 'Components/Container',
};
export default meta;

type Story = StoryObj<typeof NesContainer>;

export const Default: Story = {
  args: {
    text: `All boys leave home someday.`,
    title: 'Mum',
  },
};

export const WithoutTitle: Story = {
  args: {
    text: `All boys leave home someday.`,
    title: undefined,
  },
};

export const Rounded: Story = {
  args: {
    text: `All boys leave home someday.`,
    title: 'Mum',
    rounded: true,
  },
};

export const Centered: Story = {
  args: {
    text: `All boys leave home someday.`,
    title: 'Mum',
    centered: true,
  },
};

export const Dark: Story = {
  args: {
    text: `All boys leave home someday.`,
    title: 'Mum',
    dark: true,
  },
  parameters: {
    backgrounds: {
      default: 'Dark',
    },
  },
};
