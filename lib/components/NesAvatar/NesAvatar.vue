<template>
  <img
    class="nes-avatar"
    :class="[sizeClass, isRoundedClass]"
    alt="Gravatar image example"
    src="https://www.gravatar.com/avatar?s=15"
    :style="{ ...pixelatedStyle }"
  />
</template>

<script setup lang="ts">
import { computed, CSSProperties } from 'vue';
import { NesAvatarSize } from './types';

const props = withDefaults(
  defineProps<{
    src: string;
    size?: NesAvatarSize;
    rounded: boolean;
    pixelated?: boolean;
  }>(),
  {
    size: 'default',
    pixelated: true,
    rounded: false,
  },
);

const sizeClass = computed(() => {
  switch (props.size) {
    case 'small':
      return 'is-small';
    case 'medium':
      return 'is-medium';
    case 'large':
      return 'is-large';
    case 'default':
    default:
      return '';
  }
});

const pixelatedStyle = computed<CSSProperties>(() =>
  props.pixelated ? { imageRendering: 'pixelated' } : {},
);

const isRoundedClass = computed(() => (props.rounded ? 'is-rounded' : ''));
</script>
