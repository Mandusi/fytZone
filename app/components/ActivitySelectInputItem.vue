<template>
  <div
    class="flex w-full gap-5 bg-secondary-bg hover:bg-muted items-center border hover:cursor-pointer border-muted rounded-lg p-4 transition duration-300"
    role="checkbox"
    :aria-checked="props.modelValue === props.label"
    tabindex="0"
    :class="{
      'border-blue-500 ring-button ring-3': props.modelValue === props.label,
    }"
    @click="select"
    @keydown.space.prevent="select"
    @keydown.enter.prevent="select"
  >
    <div class="w-8 h-8">
      <UIcon
        :name="props.icon"
        size="32"
        :class="{ 'bg-button': props.modelValue === props.label }"
      />
    </div>
    <div>
      <span
        class="font-bold text-lg"
        :class="{ 'text-secondary': props.modelValue === props.label }"
        >{{ props.label }}</span
      >
      <p class="text-sm">{{ props.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const select = () => {
  emit("update:modelValue", props.label);
};
</script>
