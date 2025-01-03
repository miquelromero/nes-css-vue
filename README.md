# nes-css-vue

A Vue 3 component library built on top of the [NES.css](https://nostalgic-css.github.io/NES.css) framework.

[![Storybook](https://raw.githubusercontent.com/storybookjs/brand/059f152ecfa4e9895380cb0e4a1f48cf80311a69/badge/badge-storybook.svg)](https://6776ff893997214c9ddaa7fc-xtnljuvvgs.chromatic.com/)

## What is nes-css-vue?

`nes-css-vue` is a set of Vue 3 components that leverage the NES.css framework. It is designed to work alongside NES.css, complementing its utility and styling classes with reusable Vue components.

## Components

All components are documented in [storybook](https://6776ff893997214c9ddaa7fc-xtnljuvvgs.chromatic.com/).

### Ready
- Container
- Icon
- Progress
- Input
- Textarea
- Select
- Checkbox
- Dialog
- List
- Pixel arts
- Avatar
- Balloon
- Table
- Nintendo characters (Nintendo owns the copyright of these characters. Please comply with the Nintendo guidelines and laws of the applicable jurisdiction.)

### With issues
- Button
  - Not ready for `a` tags nor router links
- Radio Group
  - Spacing issues 
- Field
  - Label not pointing to input

### Pending
- Badge

## Installation

To use this library, you need to install both `nes-css-vue` and `nes.css`:

```bash
pnpm add nes-css-vue nes.css
```
```bash
npm install nes-css-vue nes.css
```
```bash
yarn add nes-css-vue nes.css
```

## Getting Started

### Import the CSS

Make sure to import the NES.css framework in your main entry file, typically `main.js` or `main.ts`:

```ts
import 'nes.css/css/nes.min.css';
```

You can also import the `scss` version of it so you can customize the theme by overriding its environment variables, or via CDN.

Please read [NES.css readme](https://github.com/nostalgic-css/NES.css?tab=readme-ov-file#styles) for further details.



### Register components globally (optional)

Make sure to import the NES.css framework in your main entry file, typically `main.js` or `main.ts`:

```ts
app.use(VueNesCss);
```

You can also import the `scss` version of it so you can customize the theme by overriding its environment variables.

### Usage

Below is an example of how to use a nes-css-vue component alongside nes.css utility classes:

```vue
<script setup>
// Not needed if you have installed the components globally
import { NesButton, NesContainer } 'nes-css-vue';
</script>

<template>
  <NesContainer title="NES.css + Vue Example">
  
    <!-- Using nes-css-vue component -->
    <NesButton label="Click Me!" variant="primary" />

    <!-- Using NES.css utility class -->
    <p class="nes-text is-primary">This text is styled using NES.css utilities</p>
  </div>
</template>
```

## Future plans

If this works well but the limitations due to the original css code become more annoying, I will consider making this a standalone library that fixes and extends the original features of NES.css, as it has been done [here](https://kyr0.github.io/nes-ui-react/) (for React).

## Documentation

The full list of components and their props is available in the nes-css-vue [storybook](https://6776ff893997214c9ddaa7fc-xtnljuvvgs.chromatic.com/).

For information on utility classes and other features of NES.css, refer to the official NES.css documentation.


## Contributing

We welcome contributions! Feel free to submit issues, feature requests, or pull requests to improve this library.

## Credits

All credits go to the creators and contributors of [NES.css](https://nostalgic-css.github.io/NES.css).
