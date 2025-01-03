import type { Meta, StoryObj } from '@storybook/vue3';
import { NesPixelArtSnesLogo } from './index';

const meta: Meta<typeof NesPixelArtSnesLogo> = {
  component: NesPixelArtSnesLogo,
  title: 'Components/PixelArt/SnesLogo',
};
export default meta;

type Story = StoryObj<typeof NesPixelArtSnesLogo>;

export const Default: Story = {};
