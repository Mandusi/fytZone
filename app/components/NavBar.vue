<template>
  <!-- Mobile -->
  <div
    v-if="isOnMobile"
    class="w-full p-5 max-sm:p-3 flex border-b justify-center transition-colors duration-300"
    :class="{
      'border-gray-200 dark:border-gray-800': true,
      'bg-bg-primary': true,
    }"
  >
    <div class="flex items-center max-w-4xl justify-between w-full">
      <div class="flex items-center">
        <div class="flex gap-3 items-center justify-center">
          <UIcon
            name="i-lucide-menu"
            size="24"
            class="mr-3 cursor-pointer"
            @click="toggleMobileMenu"
          />
        </div>
      </div>
      <div class="flex items-center gap-2">
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

    <!-- Mobile Menu Overlay -->
    <div
      v-if="isMobileMenuOpen"
      class="fixed inset-0 z-50 bg-black bg-opacity-50"
      @click="closeMobileMenu"
    >
      <div
        class="fixed left-0 top-0 h-full w-80 max-w-sm bg-white dark:bg-gray-900 shadow-xl transform transition-transform duration-300 ease-in-out"
        :class="{
          'translate-x-0': isMobileMenuOpen,
          '-translate-x-full': !isMobileMenuOpen,
        }"
        @click.stop
      >
        <!-- Mobile Menu Header -->
        <div
          class="flex items-center justify-between p-5 border-b border-gray-200 dark:border-gray-700"
        >
          <img
            :src="
              colorMode.value === 'dark' ? '/logo-white.svg' : '/logo-black.svg'
            "
            alt="logo"
            class="h-8"
          />
          <UIcon
            name="i-lucide-x"
            size="24"
            class="cursor-pointer text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            @click="closeMobileMenu"
          />
        </div>

        <!-- Mobile Menu Navigation -->
        <nav class="flex flex-col p-5 space-y-4">
          <NuxtLink
            to="/#home"
            class="text-lg font-medium transition-colors hover:text-accent-blue py-2"
            :class="{ 'text-text-primary': true }"
            @click="closeMobileMenu"
          >
            {{ $t("nav.home") }}
          </NuxtLink>
          <NuxtLink
            to="/#about"
            class="text-lg font-medium transition-colors hover:text-accent-blue py-2"
            :class="{ 'text-text-primary': true }"
            @click="closeMobileMenu"
          >
            {{ $t("nav.about") }}
          </NuxtLink>
          <NuxtLink
            to="/#contact"
            class="text-lg font-medium transition-colors hover:text-accent-blue py-2"
            :class="{ 'text-text-primary': true }"
            @click="closeMobileMenu"
          >
            {{ $t("nav.contact") }}
          </NuxtLink>
          <NuxtLink
            to="/pricing"
            class="text-lg font-medium transition-colors hover:text-accent-blue py-2"
            :class="{ 'text-text-primary': true }"
            @click="closeMobileMenu"
          >
            Pricing
          </NuxtLink>
        </nav>

        <!-- Mobile Menu Footer -->
        <div
          class="absolute bottom-0 left-0 right-0 p-5 border-t border-gray-200 flex items-center justify-center dark:border-gray-700"
        >
          <UButton
            icon="i-lucide-sparkles"
            class="flex justify-center items-center text-white bg-button rounded-full px-3 py-1 text-sm"
            @click="$router.push('/demo')"
          >
            {{ $t("nav.tryNow") }}
          </UButton>
        </div>
      </div>
    </div>
  </div>

  <!-- Desktop -->
  <div
    v-else
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

        <UButton
          icon="i-lucide-sparkles"
          class="px-5 py-2 text-white bg-button hover:bg-blue-700 rounded-full max-sm:px-3 max-sm:py-1 max-sm:text-sm"
          @click="$router.push('/demo')"
        >
          {{ $t("nav.tryNow") }}
        </UButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
const { locale, setLocale } = useI18n();

const isOnMobile = ref(false);
const isMobileMenuOpen = ref(false);

onMounted(() => {
  isOnMobile.value = window.innerWidth <= 768;

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768 && isMobileMenuOpen.value) {
      isMobileMenuOpen.value = false;
    }
  });
});

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

onMounted(() => {
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === "Escape" && isMobileMenuOpen.value) {
      closeMobileMenu();
    }
  };

  document.addEventListener("keydown", handleEscape);

  onUnmounted(() => {
    document.removeEventListener("keydown", handleEscape);
  });
});

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
