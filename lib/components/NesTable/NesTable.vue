<template>
  <table
    class="nes-table"
    :class="[isBorderedClass, isCenteredClass, isDarkClass]"
  >
    <slot />
  </table>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    dark?: boolean;
    bordered?: boolean;
    centered?: boolean;
  }>(),
  {
    dark: false,
    bordered: true,
    centered: false,
  },
);

const isBorderedClass = computed(() => (props.bordered ? 'is-bordered' : ''));
const isCenteredClass = computed(() => (props.centered ? 'is-centered' : ''));
const isDarkClass = computed(() => (props.dark ? 'is-dark' : ''));
</script>
