<template>
  <div
    class="w-full p-5 flex border-b justify-center items-center duration-300"
    :class="{
      'border-gray-200 dark:border-gray-800': true,
      'bg-primary-bg': true,
    }"
  >
    <div class="flex items-center max-w-4xl justify-between w-full">
      <div class="flex items-center">
        <NuxtLink to="/">
          <img
            :src="
              useColorMode().value === 'dark'
                ? '/logo-white.svg'
                : '/logo-black.svg'
            "
            alt="logo"
            class="h-8"
          />
        </NuxtLink>
      </div>

      <nav
        class="gap-4 justify-center items-center hidden md:flex font-medium whitespace-nowrap"
      >
        <NavLinks />
      </nav>

      <div class="flex items-center gap-2 justify-end">
        <div
          class="rounded-full cursor-pointer h-8 w-8 flex justify-center items-center duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
          aria-label="Toggle color mode"
        >
          <UIcon
            :name="
              useColorMode().value === 'dark'
                ? 'i-lucide-moon'
                : 'i-lucide-sun-medium'
            "
            :size="useColorMode().value === 'dark' ? 20 : 24"
            class="duration-200"
            :class="{
              'text-yellow-500': useColorMode().value === 'light', // Yellow sun
              'text-indigo-400': useColorMode().value === 'dark', // Indigo moon
            }"
            @click="
              useColorMode().preference =
                useColorMode().value === 'dark' ? 'light' : 'dark'
            "
          />
        </div>

        <!-- Language Switcher -->
        <UDropdownMenu
          :items="[
            {
              icon: 'i-circle-flags-en',
              onSelect: () => {
                setLocale('en');
              },
            },
            {
              icon: 'i-circle-flags-tr',
              onSelect: () => {
                setLocale('tr');
              },
            },
            {
              icon: 'i-circle-flags-de',
              onSelect: () => {
                setLocale('de');
              },
            },
          ]"
          :ui="{
            content: 'min-w-0 w-10',
          }"
        >
          <UButton
            color="neutral"
            variant="ghost"
            :icon="`i-circle-flags-${locale}`"
            size="lg"
          />
        </UDropdownMenu>

        <UButton
          icon="i-lucide-sparkles"
          class="px-5 py-2 text-white hidden md:flex bg-button rounded-full max-sm:px-3 max-sm:py-1 max-sm:text-sm"
          color="secondary"
          @click="$router.push('/demo')"
        >
          {{ $t("nav.tryNow") }}
        </UButton>

        <div class="flex md:hidden">
          <USlideover
            v-model:open="isSlideoverOpen"
            :ui="{ content: 'w-full max-w-sm' }"
          >
            <UIcon
              slot="trigger"
              name="i-lucide-menu"
              size="28"
              class="cursor-pointer"
            />

            <template #content>
              <div
                class="flex flex-col h-full"
                @click="isSlideoverOpen = false"
              >
                <div
                  class="flex justify-center p-5 border-b border-gray-200 dark:border-gray-800"
                >
                  <img
                    :src="
                      useColorMode().value === 'dark'
                        ? '/logo-white.svg'
                        : '/logo-black.svg'
                    "
                    alt="logo"
                    class="h-8"
                  />
                </div>
                <div
                  class="flex flex-col h-full gap-5 justify-between items-center"
                >
                  <div class="flex flex-col items-center gap-10 pt-10 text-xl">
                    <NavLinks />
                  </div>
                  <AppFooter />
                </div>
              </div>
            </template>
          </USlideover>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { locale, setLocale } = useI18n();

const isSlideoverOpen = ref(false);
</script>
