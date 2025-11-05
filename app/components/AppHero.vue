<template>
  <div
    id="home"
    class="flex w-full h-[calc(100vh-73px)] justify-center items-center md:items-start"
  >
    <div
      class="flex flex-col items-center justify-center gap-8 h-full max-w-3xl text-center md:gap-8 py-8 px-4"
    >
      <h1 class="text-black dark:text-primary-text">
        {{ $t("hero.title") }}
        <span
          class="bg-gradient-to-b from-gradient-start to-gradient-end text-transparent bg-clip-text"
          >{{ $t("hero.titleHighlight") }}</span
        >
      </h1>

      <p>{{ $t("hero.description") }}</p>

      <UButton
        icon="i-lucide-sparkles"
        size="md"
        color="secondary"
        variant="solid"
        class="px-10 py-2 mt-7 text-white bg-button rounded-full"
        @click="$router.push('/demo')"
        >{{ $t("hero.cta") }}</UButton
      >

      <ComparisonSlider />
    </div>
  </div>
</template>
