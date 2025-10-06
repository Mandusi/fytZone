<template>
  <div
    class="w-full p-5 flex border-b justify-center transition-colors duration-300"
    :class="{
      // Border color changes based on theme, using a subtle gray for contrast
      'border-gray-200 dark:border-gray-800': true,
      // Use the theme-aware background color
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
        class="flex-1 gap-6 justify-center items-center hidden md:flex font-medium"
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
          to="/#blogs"
          class="transition-colors hover:text-accent-blue"
          active-class="text-accent-blue"
          :class="{ 'text-text-primary': true }"
        >
          Blogs
        </NuxtLink>
      </nav>

      <div class="flex flex-1 items-center justify-end gap-4">
        <div
          class="rounded-full cursor-pointer h-8 w-8 flex justify-center items-center transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
          aria-label="Toggle color mode"
          @click="toggleColorMode"
        >
          <UIcon
            :name="iconName"
            :size="20"
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
        >
          <UButton
            color="neutral"
            variant="ghost"
            :label="currentLocale.toUpperCase()"
            trailing-icon="i-lucide-chevron-down"
            size="sm"
          />
        </UDropdownMenu>

        <div
          class="flex items-center gap-2 border px-3 py-1 rounded-full hover:shadow-md transition-shadow duration-200"
        >
          <NuxtLink
            to="/demo"
            class="font-medium transition-colors hover:gradient-text"
            :class="{
              'border-gray-300 dark:border-gray-700 text-text-primary': true,
            }"
          >
            {{ $t("nav.tryNow") }}
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

const currentLocale = computed(() => locale.value);

const languageItems = computed(() => [
  [
    {
      label: "English",
      icon: "i-circle-flags-en",
      onSelect: () => {
        console.log("Switching to English");
        setLocale("en");
      },
    },
    {
      label: "Türkçe",
      icon: "i-circle-flags-tr",
      onSelect: () => {
        console.log("Switching to Turkish");
        setLocale("tr");
      },
    },
    {
      label: "Deutsch",
      icon: "i-circle-flags-de",
      onSelect: () => {
        console.log("Switching to German");
        setLocale("de");
      },
    },
  ],
]);
</script>
