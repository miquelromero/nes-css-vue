<template>
  <div class="nes-select" :class="[isDarkClass, modifierClass]">
    <select v-model="modelValue" required>
      <option value="" disabled hidden selected>{{ placeholder || '' }}</option>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { NesSelectOption, NesSelectStatus } from "./types";

const modelValue = defineModel<string>({ required: true, default: '' });

const props = withDefaults(
  defineProps<{
    options: NesSelectOption[];
    dark?: boolean;
    placeholder?: string;
    status?: NesSelectStatus;
  }>(),
  {
    dark: false,
    status: "default",
  }
);

const isDarkClass = computed(() => (props.dark ? "is-dark" : ""));
const modifierClass = computed(() => {
  switch (props.status) {
    case "success":
      return "is-success";
    case "warning":
      return "is-warning";
    case "error":
      return "is-error";
    case "default":
      return "";
  }
});
</script>
