import type { Meta, StoryObj } from '@storybook/vue3';
import { NesNintendoMario } from './index';

const meta: Meta<typeof NesNintendoMario> = {
  component: NesNintendoMario,
  title: 'Components/Nintendo/Mario',
};
export default meta;

type Story = StoryObj<typeof NesNintendoMario>;

export const Default: Story = {};
