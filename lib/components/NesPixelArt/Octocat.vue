<template>
  <i class="nes-octocat" :class="animateClass"></i>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    animate?: boolean;
  }>(),
  {
    animate: false,
  },
);

const animateClass = computed(() => (props.animate ? 'animate' : ''));
</script>
