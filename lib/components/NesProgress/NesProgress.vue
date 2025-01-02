<template>
  <progress class="nes-progress" :class="modifierClass" :value="value" :max="max"></progress>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { NesProgressVariant } from './types';
const props = withDefaults(defineProps<{
  variant?: NesProgressVariant;
  value?: number;
  max?: number;
}>(), {
  variant: 'default'
});

const modifierClass = computed(() => {
  switch(props.variant) {
    case 'primary':
      return 'is-primary';
    case 'success':
      return 'is-success';
    case 'warning':
      return 'is-warning';
    case 'error':
      return 'is-error';
    case 'pattern':
      return 'is-pattern';
    case 'default':
      return '';
  }
})
</script>
