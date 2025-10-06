<template>
  <div
    id="home"
    class="flex w-full h-[calc(100vh-75px)] justify-center items-center"
  >
    <div
      class="flex flex-col items-center justify-center max-w-3xl text-center gap-10 py-20 px-4 sm:px-6 lg:px-8"
    >
      <h1 class="text-black dark:text-primary-text">
        {{ $t("hero.title") }}
        <span
          class="bg-gradient-to-b from-gradient-start to-gradient-end text-transparent bg-clip-text"
          >{{ $t("hero.titleHighlight") }}</span
        >
      </h1>

      <div>
        <p>
          {{ $t("hero.description") }}
        </p>
      </div>
      <UButton
        icon="i-lucide-sparkles"
        size="md"
        color="secondary"
        variant="solid"
        class="px-10 py-2 text-white bg-button rounded-full"
        >{{ $t("hero.cta") }}</UButton
      >
    </div>
  </div>
</template>
