import type { Meta, StoryObj } from '@storybook/vue3';
import { NesNintendoPokeball } from './index';

const meta: Meta<typeof NesNintendoPokeball> = {
  component: NesNintendoPokeball,
  title: 'Components/Nintendo/Pokeball',
};
export default meta;

type Story = StoryObj<typeof NesNintendoPokeball>;

export const Default: Story = {};
