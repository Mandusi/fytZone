<template>
  <div
    class="w-full h-32 flex flex-col justify-center items-center border-t border-gray-300 dark:border-gray-700 p-3"
  >
    <div
      class="flex flex-col max-w-4xl w-full h-full justify-center items-center gap-4"
    >
      <div class="flex justify-between w-full">
        <div class="flex gap-6 items-center">
          <UButton
            icon="i-lucide-sparkles"
            class="px-5 py-2 text-white bg-button hover:bg-blue-700 rounded-full max-sm:px-3 max-sm:py-1 max-sm:text-sm"
            @click="$router.push('/demo')"
          >
            {{ $t("nav.tryNow") }}
          </UButton>
          <nav
            class="gap-6 justify-center items-center hidden md:flex font-medium"
          >
            <NuxtLink
              to="/#home"
              class="transition-colors hover:text-accent-blue"
              active-class="text-accent-blue"
              :class="{ 'text-text-primary': true }"
              >Home</NuxtLink
            >
            <NuxtLink
              to="/#about"
              class="transition-colors hover:text-accent-blue"
              active-class="text-accent-blue"
              :class="{ 'text-text-primary': true }"
              >About</NuxtLink
            >
            <NuxtLink
              to="/#contact"
              class="transition-colors hover:text-accent-blue"
              active-class="text-accent-blue"
              :class="{ 'text-text-primary': true }"
            >
              {{ $t("nav.contact") }}
            </NuxtLink>
          </nav>
          <NuxtLink
            to="/privacy"
            class="transition-colors hover:text-accent-blue"
            :class="{ 'text-text-primary': true }"
          >
            {{ $t("nav.privacy") }}
          </NuxtLink>
        </div>
      </div>
      <div>
        <p class="text-muted-text max-sm:text-xs text-center">
          Copyright © 2025 FytZone. All rights reserved.
        </p>
      </div>
    </div>
  </div>
</template>
