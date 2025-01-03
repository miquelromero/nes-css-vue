import type { Preview } from '@storybook/vue3';
import 'nes.css/css/nes.min.css';

const preview: Preview = {
  parameters: {
    docs: {
      toc: true,
    },
    backgrounds: {
      values: [
        { name: 'Dark', value: '#212529' },
        { name: 'Light', value: '#FFF' },
      ],
      default: 'Light',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
