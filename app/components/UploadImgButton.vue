<script setup lang="ts">
import { ref, defineEmits } from "vue";

const image = ref<ArrayBuffer | null>(null);
const emit = defineEmits(["file-uploaded"]);

async function handleFileUpload(event: Event) {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    const arrayBuffer = await target.files[0].arrayBuffer();
    image.value = arrayBuffer;
    emitFile();
  }
}

function emitFile() {
  if (image.value) {
    emit("file-uploaded", image.value);
  }
}
</script>

<template>
  <div
    class="flex flex-col w-full md:w-fit items-center gap-4 whitespace-nowrap"
  >
    <input
      id="fileInput"
      type="file"
      class="hidden"
      accept="image/*"
      @change="handleFileUpload"
    />

    <label
      for="fileInput"
      class="cursor-pointer px-8 py-2 font-semibold rounded-full bg-button text-center w-full text-white hover:bg-blue-300 transition"
    >
      <UIcon name="i-lucide-upload" />
      Upload Image
    </label>
  </div>
</template>
