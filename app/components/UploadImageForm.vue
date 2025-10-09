<template>
  <div class="flex flex-col gap-6">
    <input
      ref="fileInput"
      type="file"
      accept="image/jpg, image/jpeg, image/png"
      @change="(e) => (inputFile = e.target.files ? e.target.files[0] : null)"
      class="hidden"
    />

    <div class="flex flex-col gap-2">
      <span class="font-medium text-lg">
        Upload an image of your workout area
      </span>
      <div
        @click="$refs.fileInput.click()"
        class="cursor-pointer flex items-center justify-center w-full min-h-16 bg-secondary-bg hover:bg-muted border border-muted hover:border-button rounded-xl overflow-hidden transition duration-300"
      >
        <img
          v-if="inputFile"
          :src="inputUrl"
          class="object-contain w-full h-full"
        />
        <div v-else class="flex justify-center items-center gap-3">
          <UIcon name="i-lucide-upload" size="24" class="mb-2" />
          <span class="text-sm"> Upload the image of your workout</span>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-2">
      <span class="font-medium text-lg">
        How do you want to use this area?
      </span>
      <ActivitySelectInput v-model="activity" />
    </div>
  </div>
</template>

<script setup>
const activity = ref();
const inputFile = ref();
const outputBuffer = ref();

const inputUrl = computed(() =>
  inputFile.value ? URL.createObjectURL(inputFile.value) : null
);

async function generate() {
  try {
    const body = new FormData();
    body.append("file", inputFile.value);
    body.append("activity", activity.value);
    const res = await fetch(
      `${useRuntimeConfig().public.API}/image-generation`,
      { method: "POST", body }
    );

    if (!res.ok) throw new Error("Failed to generate image");

    outputBuffer.value = await res.arrayBuffer();
  } catch (error) {
    throw error;
  }
}

defineExpose({
  activity,
  inputFile,
  outputBuffer,
  generate,
});
</script>
