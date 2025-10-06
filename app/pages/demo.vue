<template>
  <div class="w-full flex justify-center items-start p-3 md:p-0">
    <div class="max-w-4xl w-full p-2 md:p-0 md:py-12 flex flex-col gap-6">
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

  fetch("http://localhost:3030/api/v1/image-generation", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.blob())
    .then((blob) => {
      const contentType = blob.type || "image/png";
      imageNames.value.dark.after = URL.createObjectURL(
        new Blob([blob], { type: contentType })
      );
      imageNames.value.light.after = URL.createObjectURL(
        new Blob([blob], { type: contentType })
      );
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
