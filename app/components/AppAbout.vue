<template>
  <div
    id="about"
    class="flex w-full h-screen bg-secondary-bg justify-center items-center"
  >
    <div class="max-w-4xl flex flex-col p-2 md:p-0 gap-8">
      <h2
        class="text-4xl font-bold text-black dark:text-primary-text font-[Inter]"
      >
        {{ $t("about.title") }}
      </h2>
      <p class="mt-4 text-lg">
        {{ $t("about.description") }}
      </p>

      <div class="flex gap-5 items-center">
        <UIcon
          name="i-lucide-dumbbell"
          size="24"
          class="bg-button dark:bg-blue-300"
        />
        <p>
          {{ $t("about.features.equipment") }}
        </p>
      </div>

      <div class="flex gap-5 items-center">
        <UIcon
          name="i-lucide-activity"
          size="24"
          class="bg-button dark:bg-blue-300"
        />
        <p>
          {{ $t("about.features.activity") }}
        </p>
      </div>

      <div class="flex gap-5 items-center">
        <UIcon
          name="i-lucide-heart"
          size="24"
          class="bg-button dark:bg-blue-300"
        />
        <p>
          {{ $t("about.features.health") }}
        </p>
      </div>
    </div>
  </div>
</template>
