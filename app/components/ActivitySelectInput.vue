<template>
  <div class="flex flex-col gap-3">
    <ActivitySelectInputItem
      v-model="selected"
      :label="$t('demo.bodybuilding')"
      :description="$t('demo.bodybuilding-desc')"
      icon="i-lucide-dumbbell"
    />
    <ActivitySelectInputItem
      v-model="selected"
      :label="$t('demo.cardio')"
      :description="$t('demo.cardio-desc')"
      icon="i-lucide-heart-pulse"
    />
    <ActivitySelectInputItem
      v-model="selected"
      :label="$t('demo.yoga')"
      :description="$t('demo.yoga-desc')"
      icon="i-lucide-brain"
    />
    <ActivitySelectInputItem
      v-model="selected"
      :label="$t('demo.crossfit')"
      :description="$t('demo.crossfit-desc')"
      icon="i-lucide-biceps-flexed"
    />
  </div>
</template>

<script setup lang="ts">
import { description } from "valibot";

const props = defineProps({
  modelValue: { type: String, default: "" },
});

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const selected = computed({
  get: () => props.modelValue,
  set: (val: string) => emit("update:modelValue", val),
});
</script>
