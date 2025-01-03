import type { Meta, StoryObj } from '@storybook/vue3';
import { NesNintendoBulbasaur } from './index';

const meta: Meta<typeof NesNintendoBulbasaur> = {
  component: NesNintendoBulbasaur,
  title: 'Components/Nintendo/Bulbasaur',
};
export default meta;

type Story = StoryObj<typeof NesNintendoBulbasaur>;

export const Default: Story = {};
