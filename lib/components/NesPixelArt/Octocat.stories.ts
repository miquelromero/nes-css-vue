import type { Meta, StoryObj } from '@storybook/vue3';
import { NesPixelArtOctocat } from './index';

const meta: Meta<typeof NesPixelArtOctocat> = {
  component: NesPixelArtOctocat,
  title: 'Components/PixelArt/Octocat',
};
export default meta;

type Story = StoryObj<typeof NesPixelArtOctocat>;

export const Default: Story = {};

export const Animated: Story = {
  args: {
    animate: true,
  },
  parameters: {
    chromatic: {
      disableSnapshot: true,
    },
  },
};
