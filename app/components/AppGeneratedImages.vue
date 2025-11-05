<template>
  <div
    class="w-full max-w-screen py-12 flex flex-col gap-6 justify-center items-center px-4 max-sm:px-3 overflow-hidden"
  >
    <h2
      class="text-center font-semibold text-3xl md:text-4xl text-black dark:text-primary-text"
    >
      {{ $t("gallery.title") }}
    </h2>
    <p class="mt-1 text-center text-muted-text max-w-2xl text-sm md:text-base">
      {{ $t("gallery.subtitle") }}
    </p>

    <ul
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 w-full max-w-5xl"
    >
      <li
        v-for="(src, i) in images"
        :key="src"
        class="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 shadow-sm hover:shadow-lg transition-all hover:ring-1 hover:ring-accent-blue/40"
      >
        <button
          type="button"
          class="block w-full focus:outline-none"
          @click="open(src)"
          :aria-label="`Open image ${i + 1}`"
        >
          <img
            :src="src"
            :alt="`${$t('gallery.title')} - ${i + 1}`"
            loading="lazy"
            class="w-full aspect-[4/3] object-cover select-none transform transition-transform duration-300 ease-out group-hover:scale-[1.02]"
          />

          <!-- hover overlay -->
          <div
            class="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-200"
          />
          <div
            class="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center"
          >
            <UIcon name="i-lucide-maximize-2" class="w-6 h-6 text-white" />
          </div>
        </button>
      </li>
    </ul>

    <!-- Lightbox modal -->
    <div
      v-if="active"
      class="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      @click.self="close"
    >
      <div class="relative max-w-5xl w-full">
        <button
          type="button"
          class="absolute -top-10 right-0 md:-right-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow hover:bg-white dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
          @click="close"
          aria-label="Close"
        >
          <UIcon name="i-lucide-x" class="w-6 h-6" />
        </button>
        <img
          :src="active"
          :alt="$t('gallery.title')"
          class="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const images = [
  "/generated-room1.png",
  "/generated-room2.png",
  "/generated-room3.png",
  "/generated-room4.png",
];

const active = ref<string | null>(null);

function open(src: string) {
  active.value = src;
}
function close() {
  active.value = null;
}

function onKey(e: KeyboardEvent) {
  if (e.key === "Escape" && active.value) close();
}

onMounted(() => window.addEventListener("keydown", onKey));
onUnmounted(() => window.removeEventListener("keydown", onKey));
</script>
