import type { Meta, StoryObj } from '@storybook/vue3';
import { NesNintendoCharmander } from './index';

const meta: Meta<typeof NesNintendoCharmander> = {
  component: NesNintendoCharmander,
  title: 'Components/Nintendo/Charmander',
};
export default meta;

type Story = StoryObj<typeof NesNintendoCharmander>;

export const Default: Story = {};
