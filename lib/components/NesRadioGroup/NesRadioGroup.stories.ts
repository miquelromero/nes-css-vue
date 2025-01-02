import type { Meta, StoryObj } from '@storybook/vue3';

import { NesRadio } from './index';

const meta: Meta<typeof NesRadio> = {
  component: NesRadio,
  title: 'Components/Radio Group',
  args: {
    options: [
      { label: 'Yes', value: 'yes' },
      { label: 'No', value: 'no' },
    ],
  },
};
export default meta;

type Story = StoryObj<typeof NesRadio>;

export const Default: Story = {
  args: {},
};
