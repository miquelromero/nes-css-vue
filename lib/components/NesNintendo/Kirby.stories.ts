import type { Meta, StoryObj } from '@storybook/vue3';
import { NesNintendoKirby } from './index';

const meta: Meta<typeof NesNintendoKirby> = {
  component: NesNintendoKirby,
  title: 'Components/Nintendo/Kirby',
};
export default meta;

type Story = StoryObj<typeof NesNintendoKirby>;

export const Default: Story = {};
