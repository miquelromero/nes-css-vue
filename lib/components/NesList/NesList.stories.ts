import type { Meta, StoryObj } from '@storybook/vue3';
import { NesList, NesListItem } from './index';

const meta: Meta<typeof NesList> = {
  component: NesList,
  title: 'Components/List',
  render: (args) => ({
    components: {
      NesList,
      NesListItem,
    },
    setup() {
      return { args };
    },
    template: `
      <NesList v-bind="args">
        <NesListItem>Item 1</NesListItem>
        <NesListItem>Item 3</NesListItem>
        <NesListItem>Item 3</NesListItem>
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
