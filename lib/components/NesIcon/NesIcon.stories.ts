import type { Meta, StoryObj } from '@storybook/vue3';
import { NesIcon } from './index';
import { NesIconName } from './types';

const meta: Meta<typeof NesIcon> = {
  component: NesIcon,
  title: 'Components/Icon',
};
export default meta;

type Story = StoryObj<typeof NesIcon>;

export const Docs: Story = {
  args: {
    icon: 'heart'
  },
  tags: ['!autodocs', '!dev'],
};

export const Small: Story = {
  args: {
    icon: 'heart',
    size: 'small',
  },
};

export const Default: Story = {
  args: {
    icon: 'heart',
    size: 'default',
  },
};

export const Medium: Story = {
  args: {
    icon: 'heart',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    icon: 'heart',
    size: 'large',
  },
};

export const All: Story = {
  render(args) {
    return {
      components: { NesIcon },
      setup() {
        return {
          args,
          icons: [
            'heart',
            'heart-half',
            'heart-transparent',
            'heart-empty',
            'star',
            'star-half',
            'star-transparent',
            'star-empty',
            'like',
            'like-empty',
            'twitter',
            'facebook',
            'instagram',
            'github',
            'google',
            'gmail',
            'medium',
            'linkedin',
            'twitch',
            'youtube',
            'reddit',
            'whatsapp',
            'close',
            'trophy',
            'coin',
          ] as NesIconName[]
        };
      },
      template: `
        <div style="display: inline-flex; flex-wrap: wrap; gap: 1rem; align-items: center;">
          <NesIcon v-bind="args" v-for="icon in icons" :key="icon" :icon="icon" :title="icon" />
        </div>
      `,
    };
  }
}


