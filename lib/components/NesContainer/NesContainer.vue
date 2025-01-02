<template>
  <div
    class="nes-container"
    :class="[isCenteredClass, withTitleClass, isDarkClass, isRoundedClass]"
  >
    <p v-if="withTitle" class="title">
      <slot name="title">{{ title }}</slot>
    </p>
    <p>
      <slot>{{ text }}</slot>
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue';

const props = withDefaults(
  defineProps<{
    title?: string;
    text?: string;
    centered?: boolean;
    dark?: boolean;
    rounded?: boolean;
  }>(),
  {
    centered: false,
    dark: false,
    rounded: false,
  },
);

const slots = useSlots();
const withTitle = computed(() => !!props.title || !!slots.title);

const isCenteredClass = computed(() => (props.centered ? 'is-centered' : ''));
const isDarkClass = computed(() => (props.dark ? 'is-dark' : ''));
const isRoundedClass = computed(() => (props.rounded ? 'is-rounded' : ''));
const withTitleClass = computed(() => (withTitle.value ? 'with-title' : ''));
</script>
