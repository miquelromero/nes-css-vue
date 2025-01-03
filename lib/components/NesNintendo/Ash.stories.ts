import type { Meta, StoryObj } from '@storybook/vue3';
import { NesNintendoAsh } from './index';

const meta: Meta<typeof NesNintendoAsh> = {
  component: NesNintendoAsh,
  title: 'Components/Nintendo/Ash',
};
export default meta;

type Story = StoryObj<typeof NesNintendoAsh>;

export const Default: Story = {};
