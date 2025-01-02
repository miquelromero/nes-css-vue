
# This is WIP

[![Netlify Status](https://api.netlify.com/api/v1/badges/60e45e14-9891-4af6-9fe8-3d53e279c434/deploy-status)](https://app.netlify.com/sites/vue-nes-css/deploys)

# vue-nes-css

A Vue 3 component library built on top of the [NES.css](https://nostalgic-css.github.io/NES.css) framework.


## What is vue-nes-css?

`vue-nes-css` is a set of Vue 3 components that leverage the NES.css framework. It is designed to work alongside NES.css, complementing its utility and styling classes with reusable Vue components.

## Components

All components are documented in [storybook](https://vue-nes-css-storybook.netlify.app).

### Completed
- Container
- Icon
- Progress
- Input
- Textarea
- Select

### Functional
- Button
  - Not ready for `a` tags nor router links

### Ongoing
- Checkbox
- Radio Group

### Pending
- Field
- Dialog
- List
- Table
- Avatar
- Balloon
- Badge
- Pixel-arts
- Nintendo-characters

## Installation

To use this library, you need to install both `vue-nes-css` and `nes.css`:

```bash
pnpm add vue-nes-css nes.css
```
```bash
npm install vue-nes-css nes.css
```
```bash
yarn add vue-nes-css nes.css
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

Below is an example of how to use a vue-nes-css component alongside nes.css utility classes:

```vue
<script setup>
// Not needed if you have installed the components globally
import { NesButton } 'vue-nes-css';
</script>

<template>
  <div class="nes-container with-title">
    <p class="title">NES.css + Vue Example</p>

    <!-- Using vue-nes-css component -->
    <NesButton label="Click Me!" variant="primary" />

    <!-- Using NES.css utility class -->
    <p class="nes-text is-primary">This text is styled using NES.css utilities</p>
  </div>
</template>
```

## Future plans

If this works well but the limitations due to the original css code become more annoying, I will consider making this a standalone library that fixes and extends the original features of NES.css.

## Documentation

The full list of components and their props is available in the vue-nes-css [storybook](https://github.com/miquelromero/vue-nes-css).

For information on utility classes and other features of NES.css, refer to the official NES.css documentation.


## Contributing

We welcome contributions! Feel free to submit issues, feature requests, or pull requests to improve this library.

## Credits

All credits go to the creators and contributors of [NES.css](https://nostalgic-css.github.io/NES.css).