import type { Meta, StoryObj } from '@storybook/vue3';
import { NesField } from './index';
import { NesInput } from '../NesInput';
import { NesTextarea } from '../NesTextarea';
import NesRadioGroup from '../NesRadioGroup/NesRadioGroup.vue';

const meta: Meta<typeof NesField> = {
  component: NesField,
  title: 'Components/Field',
  render: (args) => ({
    components: { NesField, NesInput },
    setup() {
      return { args };
    },
    template: `
      <NesField v-bind="args">
        <NesInput :dark="args.dark" />
      </NesField>
    `,
  }),
};
export default meta;

type Story = StoryObj<typeof NesField>;

export const Docs: Story = {
  args: {
    label: 'Your name',
  },
  tags: ['!autodocs', '!dev'],
};

export const Default: Story = {
  args: {
    label: 'Your name',
  },
};

export const Inline: Story = {
  args: {
    label: 'Your name',
    inline: true,
  },
};

export const Dark: Story = {
  args: {
    label: 'Your name',
    dark: true,
  },
  parameters: {
    backgrounds: {
      default: 'Dark',
    },
  },
};

export const WithTextarea: Story = {
  args: {
    label: 'Describe your character',
  },
  render: (args) => ({
    components: { NesField, NesTextarea },
    setup() {
      return { args };
    },
    template: `
      <NesField v-bind="args">
        <NesTextarea />
      </NesField>
    `,
  }),
};

export const WithRadioGroup: Story = {
  args: {
    label: 'Are you sure?',
  },
  render: (args) => ({
    components: { NesField, NesRadioGroup },
    setup() {
      return {
        args,
        options: [
          { label: 'Yes', value: 'yes' },
          { label: 'No', value: 'no' },
        ],
      };
    },
    template: `
      <NesField v-bind="args">
        <NesRadioGroup  :options="options" />
      </NesField>
    `,
  }),
};
