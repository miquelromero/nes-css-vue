<template>
  <i class="nes-icon" :class="[iconClass, sizeClass]"></i>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { NesIconName, NesIconSize } from './types';

const props = withDefaults(defineProps<{
  icon: NesIconName;
  size?: NesIconSize;
}>(), {
  size: 'default',
});

const sizeClass = computed(() => {
  switch(props.size) {
    case 'small':
      return 'is-small';
    case 'medium':
      return 'is-medium';
    case 'large':
      return 'is-large';
    case 'default':
      return '';
  }
});

const iconClass = computed(() => {
  switch (props.icon) {
    case 'heart-half':
      return 'heart is-half';
    case 'heart-transparent':
      return 'heart is-transparent';
    case 'heart-empty':
      return 'heart is-empty';
    case 'star-half':
      return 'star is-half';
    case 'star-transparent':
      return 'star is-transparent';
    case 'star-empty':
      return 'star is-empty';
    case 'like-empty':
      return 'like is-empty';
    default:
      return props.icon
  }

});
</script>
