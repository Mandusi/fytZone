<template>
  <div class="max-w-4xl flex flex-col gap-10 max-sm:p-3">
    <img :src="imageUrl" :alt="title" class="w-full h-auto my-4 rounded-lg" />
    <div class="flex flex-col gap-3">
      <span class="text-3xl max-sm:text-xl font-semibold">{{ title }}</span>
      <span class="max-sm:text-xs"> {{ content }} </span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: { type: String, required: true },
  content: { type: String, required: true },
  imageUrl: { type: String, required: true },
});
</script>
