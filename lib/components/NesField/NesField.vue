<template>
  <div class="nes-field" :class="[inlineClass]">
    <!-- this is a current limitation of NES.css -->
    <label :style="dark ? { color: '#fff' } : undefined">{{ label }}</label>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    label: string;
    inline?: boolean;
    dark?: boolean;
  }>(),
  {
    inline: false,
    dark: false,
  },
);

const inlineClass = computed(() => (props.inline ? 'is-inline' : ''));
</script>
