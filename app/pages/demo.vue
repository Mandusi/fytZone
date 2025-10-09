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

      <UploadImageForm @file-uploaded="handleFileUploaded" />

      <div>
        <ImgComparisonSlider
          class="slider-example-focus slider-example-split-line border h-auto border-button rounded"
          tabindex="0"
          hover="hover"
          :value="sliderValue"
        >
          <!-- eslint-disable -->
          <img
            slot="first"
            style="width: 100%; object-fit: contain"
            :src="
              colorMode.value === 'dark'
                ? imageNames.dark.before
                : imageNames.light.before
            "
          />
          <img
            slot="second"
            style="width: 100%"
            :src="
              colorMode.value === 'dark'
                ? imageNames.dark.after
                : imageNames.light.after
            "
          />
          <!-- eslint-enable -->
        </ImgComparisonSlider>
      </div>
      <LoadingAnimation :show="loaing" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ImgComparisonSlider } from "@img-comparison-slider/vue";

const colorMode = useColorMode();

const loaing = ref(false);
const toast = useToast();
const imageNames = ref({
  light: {
    before: "/white-before.jpg",
    after: "/white-after.png",
  },
  dark: {
    before: "dark-before.jpg",
    after: "dark-after.png",
  },
});

async function handleFileUploaded(imageFile: File, selectedActivity: string) {
  loaing.value = true;
  console.log("Received file:", imageFile);
  const imageBuffer = await imageFile.arrayBuffer();

  imageNames.value.dark.before = URL.createObjectURL(new Blob([imageBuffer]));
  console.log(imageBuffer);
  imageNames.value.light.before = URL.createObjectURL(new Blob([imageBuffer]));

  const formData = new FormData();
  formData.append("file", new Blob([imageBuffer]), "uploaded-image.jpg");

  fetch(`${useRuntimeConfig().public.API}/image-generation`, {
    method: "POST",
    body: JSON.stringify({ formData, selectedActivity }),
  })
    .then(async (response) => {
      const res = await response.json();
      console.log("API Response:", res);

      if (res.success && res.data && res.data.data) {
        const imageData = new Uint8Array(res.data.data);

        const blob = new Blob([imageData], { type: "image/png" });

        const imageUrl = URL.createObjectURL(blob);
        imageNames.value.dark.after = imageUrl;
        imageNames.value.light.after = imageUrl;
      } else {
        console.error("Invalid response format:", res);
      }
    })
    .catch((error) => {
      console.error("Error during fetch:", error);
      toast.add({
        title: "Error",
        description: "There was an error processing your request.",
        color: "error",
      });
    });
  loaing.value = false;
}

const sliderValue = ref(100);

function easeInOut(t: number) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

function animateValue(start: number, end: number, duration: number, delay = 0) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      const startTime = performance.now();

      function step(now: number) {
        const rawProgress = Math.min((now - startTime) / duration, 1);
        const easedProgress = easeInOut(rawProgress);

        sliderValue.value = start + (end - start) * easedProgress;

        if (rawProgress < 1) {
          requestAnimationFrame(step);
        } else {
          resolve();
        }
      }

      requestAnimationFrame(step);
    }, delay);
  });
}

// Run the animation once
async function run() {
  await animateValue(100, 0, 1200); // back to 50 in 400ms
  await animateValue(0, 100, 1200); // rise in 1s
  await animateValue(100, 50, 1200); // back to 50 in 400ms
}

run();
</script>

<style scoped>
.slider-example-focus {
  transition: box-shadow 200ms ease-in-out;
}

.slider-example-focus:focus {
  outline: none;
}

.slider-example-split-line {
  --divider-width: 3px;

  --divider-color: var(--color-button);
  --default-handle-color: var(--color-button);
  --default-handle-width: 40px;
  --hover-handle-width: 80px;
}
</style>
