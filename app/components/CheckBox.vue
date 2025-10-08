<template>
  <div class="flex flex-col gap-3">
    <CheckBoxItem
      v-model="selected.bodybuilding"
      label="Bodybuilding"
      description="Focused on building muscle size, strength, and definition through weightlifting and structured resistance training."
      icon="i-lucide-dumbbell"
    />
    <CheckBoxItem
      v-model="selected.cardio"
      label="Cardio"
      description="Improves heart health, stamina, and endurance with activities like running, cycling, or HIIT workouts."
      icon="i-lucide-heart-pulse"
    />
    <CheckBoxItem
      v-model="selected.yoga"
      label="Yoga / Pilates"
      description="Enhances flexibility, balance, posture, and core strength while reducing stress and improving body awareness."
      icon="i-lucide-brain"
    />
    <CheckBoxItem
      v-model="selected.crossfit"
      label="CrossFit / Calisthenics"
      description="A high-intensity, varied workout regimen combining weightlifting, cardio, and functional movements for overall fitness."
      icon="i-lucide-biceps-flexed"
    />
  </div>
</template>

<script setup lang="ts">
const selected = reactive({
  bodybuilding: false,
  cardio: false,
  yoga: false,
  crossfit: false,
});
</script>
