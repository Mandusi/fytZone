<template>
  <div
    class="flex w-full gap-5 bg-secondary-bg hover:bg-muted items-center border hover:cursor-pointer border-muted rounded-lg p-4 transition duration-300"
    role="checkbox"
    :aria-checked="props.modelValue"
    tabindex="0"
    :class="{
      'border-blue-500 ring-button ring-3': props.modelValue,
    }"
    @click="toggleCheck"
    @keydown.space.prevent="toggleCheck"
    @keydown.enter.prevent="toggleCheck"
  >
    <div class="w-8 h-8">
      <UIcon
        :name="props.icon"
        size="32"
        :class="{ 'bg-button': props.modelValue }"
      />
    </div>
    <div>
      <span
        class="font-bold text-lg"
        :class="{ 'text-secondary': props.modelValue }"
        >{{ props.label }}</span
      >
      <p class="text-sm">{{ props.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "i-lucide-dumbbell",
  },
});

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

const toggleCheck = () => {
  emit("update:modelValue", !props.modelValue);
};
</script>
