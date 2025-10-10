<template>
  <div
    v-if="show"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
  >
    <div class="flex flex-col gap-12 items-center">
      <div class="grid grid-cols-2 gap-4 animate-spin">
        <UIcon name="i-lucide-dumbbell" class="w-12 h-12 bg-button" />
        <UIcon name="i-lucide-brain" class="w-12 h-12 bg-button" />

        <UIcon name="i-lucide-heart-pulse" class="w-12 h-12 bg-button" />
        <UIcon name="i-lucide-biceps-flexed" class="w-12 h-12 bg-button" />
      </div>

      <p
        class="mt-5 text-white font-semibold text-lg transition-opacity duration-500"
      >
        {{ currentStep }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ show: boolean }>();

const { t } = useI18n();

const steps = [
  t("loading.steps.analyzing"),
  t("loading.steps.detecting"),
  t("loading.steps.matching"),
  t("loading.steps.generating"),
  t("loading.steps.finalizing"),
];

const currentStep = ref(steps[0]);
let stepIndex = 0;
let interval: NodeJS.Timeout | null = null;

onMounted(() => {
  interval = setInterval(() => {
    stepIndex++;
    currentStep.value = steps[stepIndex] || steps[steps.length - 1];
  }, 3000);
});

onUnmounted(() => {
  if (interval) clearInterval(interval);
});
</script>
