<template>
  <div class="w-full flex justify-center items-start p-3 md:p-0">
    <div class="max-w-4xl w-full md:p-0 md:py-12 flex flex-col gap-6">
      <div
        class="flex flex-col md:flex-row justify-center gap-4 items-center md:justify-between md:items-end"
      >
        <div class="text-center md:text-left">
          <h3 class="text-black dark:text-primary-text">Build your DIY Gym</h3>
          <p>
            Specify your desired working area and simply upload an image and let
            FytZone AI design your Gym
          </p>
        </div>
      </div>

      <div class="flex flex-col gap-6">
        <UploadImageForm ref="Form" />

        <div class="flex justify-center w-full">
          <UButton
            label="Generate My Gym"
            icon="i-lucide-sparkles"
            size="xl"
            class="px-20 py-3 text-white cursor-pointer !bg-button rounded-full disabled:!bg-muted"
            :disabled="!Form?.inputFile || !Form?.activity"
            @click="generate"
          />
        </div>
      </div>

      <ComparisonSlider
        :images="
          inputImage && resultImage
            ? { before: inputImage, after: resultImage }
            : null
        "
      />

      <LoadingAnimation :show="isLoading" />
    </div>
  </div>
</template>
<script setup>
const isLoading = ref(false);
const Form = ref();

const inputImage = computed(() => {
  const file = Form.value?.inputFile;
  return file ? URL.createObjectURL(file) : null;
});

const resultImage = computed(() => {
  const buffer = Form.value?.outputBuffer;
  return buffer ? URL.createObjectURL(new Blob([buffer])) : null;
});

async function generate() {
  try {
    isLoading.value = true;
    await Form.value.generate();
  } catch (error) {
    useToast().add({
      title: "Error",
      description:
        error.message || "An error occurred during image generation.",
      color: "error",
    });
  } finally {
    isLoading.value = false;
  }
}
</script>
