// Replace your-renderer with the renderer you are using (e.g., react, vue3, etc.)
import type { Meta, StoryObj } from '@storybook/vue3';
import { NesDialog } from './index';
import NesButton from '../NesButton/NesButton.vue';

const meta: Meta<typeof NesDialog> = {
  component: NesDialog,
  title: 'Components/Dialog',
  args: {
    modelValue: true,
  },
  render: (args) => ({
    components: { NesDialog, NesButton },
    setup() {
      return { args };
    },
    template: `
      <NesDialog v-bind="args">
        <template #title>
          {{ args.title }}
        </template>
        <template #default>
          <p>Alert: this is a dialog.</p>
        </template>
        <template #actions>
          <NesButton>Cancel</NesButton>
          <NesButton variant="primary">Ok</NesButton>
        </template>
      </NesDialog>
    `,
  }),
};
export default meta;

type Story = StoryObj<typeof NesDialog>;

export const Default: Story = {
  args: {
    title: 'Dialog',
  },
};

export const WithoutTitle: Story = {
  args: {},
};

export const Rounded: Story = {
  args: {
    title: 'Dialog',
    rounded: true,
  },
};

export const Dark: Story = {
  args: {
    title: 'Dialog',
    dark: true,
  },
  parameters: {
    backgrounds: {
      default: 'Dark',
    },
  },
};
