<template>
  <div
    class="w-full p-5 flex border-b justify-center transition-colors duration-300"
    :class="{
      'border-gray-200 dark:border-gray-800': true,
      'bg-bg-primary': true,
    }"
  >
    <div class="flex items-center max-w-4xl justify-between w-full mx-auto">
      <div class="flex flex-1 items-center">
        <NuxtLink to="/">
          <img
            :src="
              colorMode.value === 'dark' ? '/logo-white.svg' : '/logo-black.svg'
            "
            alt="logo"
            class="h-8"
          />
        </NuxtLink>
      </div>

      <nav
        class="flex-1 gap-6 justify-center items-center hidden md:flex font-medium whitespace-nowrap"
      >
        <NuxtLink
          to="/#home"
          class="transition-colors hover:text-accent-blue"
          active-class="text-accent-blue"
          :class="{ 'text-text-primary': true }"
          >{{ $t("nav.home") }}</NuxtLink
        >
        <NuxtLink
          to="/#about"
          class="transition-colors hover:text-accent-blue"
          active-class="text-accent-blue"
          :class="{ 'text-text-primary': true }"
          >{{ $t("nav.about") }}</NuxtLink
        >
        <NuxtLink
          to="/#contact"
          class="transition-colors hover:text-accent-blue"
          active-class="text-accent-blue"
          :class="{ 'text-text-primary': true }"
        >
          {{ $t("nav.contact") }}
        </NuxtLink>
        <NuxtLink
          to="/pricing"
          class="transition-colors hover:text-accent-blue"
          active-class="text-accent-blue"
          :class="{ 'text-text-primary': true }"
        >
          Pricing
        </NuxtLink>
      </nav>

      <div class="flex flex-1 items-center gap-2 justify-end">
        <div
          class="rounded-full cursor-pointer h-8 w-8 flex justify-center items-center transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
          aria-label="Toggle color mode"
          @click="toggleColorMode"
        >
          <UIcon
            :name="iconName"
            :size="iconName === 'i-lucide-moon' ? 20 : 24"
            class="transition-colors duration-200"
            :class="{
              'text-yellow-500': colorMode.value === 'light', // Yellow sun
              'text-indigo-400': colorMode.value === 'dark', // Indigo moon
            }"
          />
        </div>

        <!-- Language Switcher -->
        <UDropdownMenu
          :items="languageItems"
          :popper="{ placement: 'bottom-end' }"
          :ui="{
            content: 'min-w-0',
          }"
        >
          <UButton
            color="neutral"
            variant="ghost"
            :icon="currentLocaleFlag"
            trailing-icon="i-lucide-chevron-down"
            size="sm"
          />
        </UDropdownMenu>

        <div
          class="flex items-center gap-2 border px-3 py-1 max-sm:border-none max-sm:p-0 rounded-full hover:shadow-md transition-shadow duration-200"
        >
          <NuxtLink
            to="/demo"
            class="font-medium transition-colors hover:gradient-text whitespace-nowrap flex items-center gap-1"
            :class="{
              'border-gray-300 dark:border-gray-700 text-text-primary': true,
            }"
          >
            <span class="max-sm:hidden">
              {{ $t("nav.tryNow") }}
            </span>
            <UIcon name="i-lucide-sparkles" size="16" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
const { locale, setLocale } = useI18n();

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
};

const iconName = computed(() => {
  return colorMode.value === "dark"
    ? "i-lucide-moon" // Dark mode shows Moon icon
    : "i-lucide-sun-medium"; // Light mode shows Sun icon
});

const currentLocaleFlag = computed(() => `i-circle-flags-${locale.value}`);

const languageItems = computed(() => [
  [
    {
      icon: "i-circle-flags-en",
      onSelect: () => setLocale("en"),
    },
    {
      icon: "i-circle-flags-tr",
      onSelect: () => setLocale("tr"),
    },
    {
      icon: "i-circle-flags-de",
      onSelect: () => setLocale("de"),
    },
  ],
]);
</script>
