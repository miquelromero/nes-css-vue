<template>
  <div>
    <label v-for="option in options" :key="option.value">
      <input
        type="radio"
        class="nes-radio"
        :name="groupName"
        :value="option.value"
        v-model="modelValue"
      />
      <span>{{ option.label }}</span>
    </label>
  </div>
</template>

<script setup lang="ts">
import { NesRadioGroupOption } from "./types";

const modelValue = defineModel<string>({ required: true });

const props = withDefaults(
  defineProps<{
    options: NesRadioGroupOption[];
    groupName?: string;
    label?: string;
  }>(),
  {
    groupName: "my-radio", // TODO
    disabled: false,
  }
);
</script>
