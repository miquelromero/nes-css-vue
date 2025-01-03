import type { Meta, StoryObj } from '@storybook/vue3';
import { NesPixelArtPhone } from './index';

const meta: Meta<typeof NesPixelArtPhone> = {
  component: NesPixelArtPhone,
  title: 'Components/PixelArt/Phone',
};
export default meta;

type Story = StoryObj<typeof NesPixelArtPhone>;

export const Default: Story = {};
