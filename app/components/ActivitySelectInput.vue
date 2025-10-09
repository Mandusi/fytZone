<template>
  <div class="flex flex-col gap-3">
    <ActivitySelectInputItem
      v-model="selected"
      label="Bodybuilding"
      description="Focused on building muscle size, strength, and definition through weightlifting and structured resistance training."
      icon="i-lucide-dumbbell"
    />
    <ActivitySelectInputItem
      v-model="selected"
      label="Cardio"
      description="Improves heart health, stamina, and endurance with activities like running, cycling, or HIIT workouts."
      icon="i-lucide-heart-pulse"
    />
    <ActivitySelectInputItem
      v-model="selected"
      label="Yoga / Pilates"
      description="Enhances flexibility, balance, posture, and core strength while reducing stress and improving body awareness."
      icon="i-lucide-brain"
    />
    <ActivitySelectInputItem
      v-model="selected"
      label="CrossFit / Calisthenics"
      description="A high-intensity, varied workout regimen combining weightlifting, cardio, and functional movements for overall fitness."
      icon="i-lucide-biceps-flexed"
    />
  </div>
</template>

<script setup lang="ts">
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
