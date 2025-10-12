<template>
  <div
    class="w-full p-5 flex flex-col justify-center items-center border-t border-gray-300 dark:border-gray-800 md:px-0"
  >
    <div
      class="flex flex-col max-w-4xl w-full h-full justify-center items-center gap-4"
    >
      <div
        class="flex flex-col md:flex-row gap-6 items-center w-full justify-between"
      >
        <UButton
          icon="i-lucide-sparkles"
          class="px-12 py-3 text-white bg-button flex justify-center hover:bg-blue-700 rounded-full whitespace-nowrap"
          color="secondary"
          @click="$router.push('/demo')"
        >
          {{ $t("nav.tryNow") }}
        </UButton>

        <nav
          class="flex flex-wrap gap-6 w-full px-8 justify-center items-center font-medium md:flex"
        >
          <NuxtLink to="/#home">{{ $t("nav.home") }}</NuxtLink>
          <NuxtLink to="/#about">{{ $t("nav.about") }}</NuxtLink>
          <NuxtLink to="/#contact">{{ $t("nav.contact") }}</NuxtLink>
          <NuxtLink to="/blog">{{ $t("nav.blog") }}</NuxtLink>
          <NuxtLink to="/pricing">{{ $t("nav.pricing") }}</NuxtLink>
          <NuxtLink to="/partnership">{{ $t("nav.partnership") }}</NuxtLink>
          <NuxtLink to="/privacy">{{ $t("nav.privacy") }}</NuxtLink>
        </nav>
      </div>

      <div>
        <p class="text-muted-text max-sm:text-xs text-center">
          {{ $t("common.copyright") }}
        </p>
      </div>
    </div>
  </div>
</template>
