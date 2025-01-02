<template>
  <button class="nes-btn" :disabled="disabled || undefined" :class="modifierClass">
    <slot>{{ label }}</slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { NesButtonVariant } from './types';

const props = withDefaults(defineProps<{
  variant?: NesButtonVariant;
  disabled?: boolean;
  label?: string;
}>(), {
  variant: 'normal',
  disabled: false,
});

const modifierClass = computed(() => {
  if (props.disabled) {
    return 'is-disabled';
  }
  switch(props.variant) {
    case 'primary':
      return 'is-primary';
    case 'success':
      return 'is-success';
    case 'warning':
      return 'is-warning';
    case 'error':
      return 'is-error';
    case 'normal':
      return '';
  }
})
</script>
