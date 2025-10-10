<template>
  <div class="flex w-full h-screen justify-center items-center">
    <div
      class="flex flex-col items-center justify-center max-w-3xl text-center gap-10 py-20 px-4 sm:px-6 lg:px-8"
    >
      <h1 class="text-black dark:text-primary-text">
        {{ $t("partnership.title") }}
        <span
          class="bg-gradient-to-b from-gradient-start to-gradient-end text-transparent bg-clip-text"
        >
          {{ $t("partnership.titleHighlight") }}
        </span>
      </h1>

      <div>
        <p>
          {{ $t("partnership.description") }}
        </p>
      </div>
      <UButton
        icon="i-lucide-mail"
        size="md"
        color="secondary"
        variant="solid"
        class="px-10 py-2 text-white bg-button rounded-full"
        @click="$router.push('/#contact')"
      >
        {{ $t("partnership.contactButton") }}</UButton
      >
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Partnership - FytZone",
  description:
    "Partner with FytZone to grow together. Join our partnership program and explore collaboration opportunities with our AI-powered gym design platform.",
});
</script>
