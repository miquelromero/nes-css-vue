import type { Meta, StoryObj } from '@storybook/vue3';
import { NesNintendoSquirtle } from './index';

const meta: Meta<typeof NesNintendoSquirtle> = {
  component: NesNintendoSquirtle,
  title: 'Components/Nintendo/Squirtle',
};
export default meta;

type Story = StoryObj<typeof NesNintendoSquirtle>;

export const Default: Story = {};
