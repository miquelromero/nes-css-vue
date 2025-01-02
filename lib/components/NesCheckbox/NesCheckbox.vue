<template>
<label>
  <input type="checkbox" class="nes-checkbox" :class="isDarkClass" v-model="modelValue" />
  <span><slot>{{ label }}</slot></span>
</label>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const modelValue = defineModel<boolean>({ required: true });

const props = withDefaults(defineProps<{
  label?: string;
  dark?: boolean;
}>(), {
  dark: false,
});

const isDarkClass = computed(() => props.dark ? 'is-dark' : '');
</script>
