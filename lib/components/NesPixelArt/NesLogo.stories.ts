import type { Meta, StoryObj } from '@storybook/vue3';
import { NesPixelArtNesLogo } from './index';

const meta: Meta<typeof NesPixelArtNesLogo> = {
  component: NesPixelArtNesLogo,
  title: 'Components/PixelArt/NesLogo',
};
export default meta;

type Story = StoryObj<typeof NesPixelArtNesLogo>;

export const Default: Story = {};
