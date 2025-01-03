import type { Meta, StoryObj } from '@storybook/vue3';
import { NesPixelArtSmartphone } from './index';

const meta: Meta<typeof NesPixelArtSmartphone> = {
  component: NesPixelArtSmartphone,
  title: 'Components/PixelArt/Smartphone',
};
export default meta;

type Story = StoryObj<typeof NesPixelArtSmartphone>;

export const Default: Story = {};
