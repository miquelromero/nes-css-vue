import type { Meta, StoryObj } from '@storybook/vue3';
import { NesTable } from './index';

const meta: Meta<typeof NesTable> = {
  component: NesTable,
  title: 'Components/Table',
  render: (args) => ({
    components: {
      NesTable,
    },
    setup() {
      return { args };
    },
    template: `
      <NesTable v-bind="args">
        <thead>
          <tr>
            <th>Table</th>
            <th>Table</th>
            <th>Table</th>
            <th>Table</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Good morning</td>
            <td>Good afternoon</td>
            <td>Good evening</td>
            <td>Good night</td>
          </tr>
          <tr>
            <td>Good morning</td>
            <td>Good afternoon</td>
            <td>Good evening</td>
            <td>Good night</td>
          </tr>
        </tbody>
      </NesTable>
    `,
  }),
};
export default meta;

type Story = StoryObj<typeof NesTable>;

export const Default: Story = {
  args: {},
};

export const WithoutBorders: Story = {
  args: {
    bordered: false,
  },
};

export const Centered: Story = {
  args: {
    centered: true,
  },
};

export const Dark: Story = {
  args: {
    dark: true,
  },
  parameters: {
    backgrounds: {
      default: 'Dark',
    },
  },
};
