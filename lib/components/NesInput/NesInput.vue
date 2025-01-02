<template>
  <input
    :placeholder="placeholder"
    v-model="modelValue"
    class="nes-input"
    :class="[isDarkClass, modifierClass]"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { NesInputStatus } from './types';

const modelValue = defineModel<string>({ required: true });

const props = withDefaults(
  defineProps<{
    dark?: boolean;
    placeholder?: string;
    status?: NesInputStatus;
  }>(),
  {
    dark: false,
    status: 'default',
  },
);

const isDarkClass = computed(() => (props.dark ? 'is-dark' : ''));
const modifierClass = computed(() => {
  switch (props.status) {
    case 'success':
      return 'is-success';
    case 'warning':
      return 'is-warning';
    case 'error':
      return 'is-error';
    case 'default':
    default:
      return '';
  }
});
</script>
