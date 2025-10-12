<template>
  <div
    class="w-full h-32 flex flex-col justify-center items-center border-t border-gray-300 dark:border-gray-800 px-5 md:px-0"
  >
    <div
      class="flex flex-col max-w-4xl w-full h-full justify-center items-center gap-4"
    >
      <div
        class="flex gap-6 items-center w-full justify-between md:justify-baseline"
      >
        <UButton
          icon="i-lucide-sparkles"
          class="px-8 py-2 text-white bg-button hover:bg-blue-700 rounded-full whitespace-nowrap"
          color="secondary"
          @click="$router.push('/demo')"
        >
          {{ $t("nav.tryNow") }}
        </UButton>
        <div class="flex justify-end md:justify-between w-full">
          <nav
            class="gap-6 justify-center items-center font-medium hidden md:flex"
          >
            <NuxtLink to="/#home">{{ $t("nav.home") }}</NuxtLink>
            <NuxtLink to="/#about">{{ $t("nav.about") }}</NuxtLink>
            <NuxtLink to="/#contact">{{ $t("nav.contact") }}</NuxtLink>
            <NuxtLink to="/blog">{{ $t("nav.blog") }}</NuxtLink>
            <NuxtLink to="/pricing">{{ $t("nav.pricing") }}</NuxtLink>
            <NuxtLink to="/partnership">{{ $t("nav.partnership") }}</NuxtLink>
          </nav>
          <NuxtLink to="/privacy">{{ $t("nav.privacy") }}</NuxtLink>
        </div>
      </div>

      <div>
        <p class="text-muted-text max-sm:text-xs text-center">
          {{ $t("common.copyright") }}
        </p>
      </div>
    </div>
  </div>
</template>
