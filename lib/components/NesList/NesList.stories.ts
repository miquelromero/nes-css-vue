import type { Meta, StoryObj } from '@storybook/vue3';
import { NesList } from './index';

const meta: Meta<typeof NesList> = {
  component: NesList,
  title: 'Components/List',
  render: (args) => ({
    components: {
      NesList,
    },
    setup() {
      return { args };
    },
    template: `
      <NesList v-bind="args">
        <li>Item 1</li>
        <li>Item 3</li>
        <li>Item 3</li>
      </NesList>
    `,
  }),
};
export default meta;

type Story = StoryObj<typeof NesList>;

export const Disc: Story = {
  args: {
    styleType: 'disc',
  },
};

export const Circle: Story = {
  args: {
    styleType: 'circle',
  },
};
