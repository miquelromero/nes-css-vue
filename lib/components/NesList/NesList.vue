<template>
  <ul class="nes-list" :class="styleTypeClass">
    <slot />
  </ul>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { NesListStyleType } from './types';

const props = withDefaults(
  defineProps<{
    styleType: NesListStyleType;
  }>(),
  {
    styleType: 'disc',
  },
);

const styleTypeClass = computed(() => {
  switch (props.styleType) {
    case 'disc':
      return 'is-disc';
    case 'circle':
      return 'is-circle';
    default:
      return '';
  }
});
</script>
