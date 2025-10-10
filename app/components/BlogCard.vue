<template>
  <div
    :title="title"
    :image="imageUrl"
    class="h-full w-full bg-secondary-bg rounded-xl overflow-hidden transition-all cursor-pointer"
    @click="
      navigateTo(
        `/blog/${title
          .toLowerCase()
          .replace(/ /g, '-')
          .replace(/[^\w-]+/g, '')}`
      )
    "
  >
    <div>
      <img :src="imageUrl" :alt="title" class="w-full object-cover" />
    </div>

    <div class="p-4 flex flex-col gap-2">
      <span class="font-semibold text-lg">{{ title }}</span>
      <p class="text-sm">
        {{ content }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: { type: String, required: true },
  content: { type: String, required: true },
  imageUrl: { type: String, required: true },
});
</script>
