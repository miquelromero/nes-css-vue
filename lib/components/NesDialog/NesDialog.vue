<template>
  <dialog
    ref="dialogEl"
    class="nes-dialog"
    :class="[isRoundedClass, isDarkClass]"
  >
    <p class="title">{{ title }}</p>
    <p><slot /></p>
    <div
      v-if="$slots.actions"
      style="display: flex; justify-content: center; gap: 1rem"
    >
      <slot name="actions"></slot>
    </div>
  </dialog>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';

const modelValue = defineModel<boolean>({ required: true });
const props = withDefaults(
  defineProps<{
    title?: string;
    rounded?: boolean;
    dark?: boolean;
  }>(),
  {
    rounded: false,
    dark: false,
  },
);

const dialogEl = ref<HTMLDialogElement | null>(null);

const open = () => {
  dialogEl.value?.showModal();
  document.body.style.overflow = 'hidden';
};

const close = () => {
  dialogEl.value?.close();
  document.body.style.overflow = '';
};

onMounted(() => {
  if (modelValue.value) {
    open();
  }
});

watch(modelValue, (value, oldValue) => {
  if (value && !oldValue) {
    open();
  } else if (!value && oldValue) {
    close();
  }
});

const isRoundedClass = computed(() => (props.rounded ? 'is-rounded' : ''));
const isDarkClass = computed(() => (props.dark ? 'is-dark' : ''));
</script>
