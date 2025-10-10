<template>
  <div
    id="about"
    class="flex flex-col gap-5 w-full h-[calc(100vh-127px)] bg-secondary-bg justify-center items-center"
  >
    <div class="max-w-4xl flex flex-col max-sm:px-3 gap-8 max-sm:gap-5">
      <p class="text-black dark:text-primary-text text-3xl max-sm:text-2xl">
        {{ $t("nav.about") }}
      </p>
      <p class="text-lg max-sm:text-sm">
        {{ $t("about.description") }}
      </p>

      <div class="flex gap-5 items-center">
        <UIcon
          name="i-lucide-dumbbell"
          :size="isOnMobile ? 20 : 24"
          class="bg-button dark:bg-blue-300"
        />
        <p class="max-sm:text-xs">
          {{ $t("about.features.equipment") }}
        </p>
      </div>

      <div class="flex gap-5 items-center">
        <UIcon
          name="i-lucide-activity"
          :size="isOnMobile ? 20 : 24"
          class="bg-button dark:bg-blue-300"
        />
        <p class="max-sm:text-xs">
          {{ $t("about.features.activity") }}
        </p>
      </div>

      <div class="flex gap-5 items-center">
        <UIcon
          name="i-lucide-heart"
          :size="isOnMobile ? 20 : 24"
          class="bg-button dark:bg-blue-300"
        />
        <p class="max-sm:text-xs">
          {{ $t("about.features.health") }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const isOnMobile = ref(false);
onMounted(() => {
  if (window.innerWidth <= 640) {
    isOnMobile.value = true;
  }
});
</script>
