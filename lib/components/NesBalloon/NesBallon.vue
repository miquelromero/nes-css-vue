<template>
  <div class="nes-balloon" :class="[isDarkClass, fromClass]">
    <p>
      <slot>{{ text }}</slot>
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    text?: string;
    dark?: boolean;
    from?: 'left' | 'right';
  }>(),
  {
    dark: false,
    from: 'left',
  },
);

const isDarkClass = computed(() => (props.dark ? 'is-dark' : ''));
const fromClass = computed(() =>
  props.from === 'right' ? 'from-right' : 'from-left',
);
</script>
