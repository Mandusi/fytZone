<template>
  <div class="w-full flex justify-center items-start p-3 md:p-0">
    <div
      class="max-w-4xl w-full pt-28 md:p-0 md:pt-28 md:py-12 flex flex-col gap-6"
    >
      <div
        class="flex flex-col md:flex-row justify-center gap-4 items-center md:justify-between md:items-end"
      >
        <div class="text-center md:text-left">
          <h3 class="text-black dark:text-primary-text">Build your DIY Gym</h3>
          <p>Simply upload an image and let FytZone AI design your Gym</p>
        </div>

        <UploadImgButton class="w-full" @file-uploaded="handleFileUploaded" />
      </div>
      <div>
        <ImgComparisonSlider class="slider-example-focus rounded" tabindex="0">
          <!-- eslint-disable -->
          <img
            slot="first"
            style="width: 100%"
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
    </div>
  </div>
</template>
<script setup lang="ts">
import { ImgComparisonSlider } from "@img-comparison-slider/vue";

// export default {
//   name: "ExampleComponent",
//   components: {
//     ImgComparisonSlider,
//   },
// };

function handleFileUploaded(imageBuffer: ArrayBuffer) {
  console.log("File uploaded:", imageBuffer);

  imageNames.value.dark.before = URL.createObjectURL(new Blob([imageBuffer]));
  console.log(imageBuffer);
  imageNames.value.light.before = URL.createObjectURL(new Blob([imageBuffer]));

  const formData = new FormData();
  formData.append("file", new Blob([imageBuffer]), "uploaded-image.jpg");

  fetch(`${useRuntimeConfig().public.API}/image-generation`, {
    method: "POST",
    body: formData,
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
      console.error("Error generating image:", error);
    });
}

const colorMode = useColorMode();

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
</script>

<style scoped>
.slider-example-focus {
  transition: box-shadow 200ms ease-in-out;
}

.slider-example-focus:focus {
  outline: none;
}
</style>
