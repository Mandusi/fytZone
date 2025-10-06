<template>
  <div class="w-full flex justify-center items-start">
    <div class="max-w-4xl w-full p-2 md:p-0 md:py-12 flex flex-col gap-6">
      <div>
        <h3 class="text-black dark:text-primary-text">Build your DIY Gym</h3>
        <p>Simply upload an image and let FytZone AI design your Gym</p>
      </div>
      <div>
        <ImgComparisonSlider>
          <!-- eslint-disable -->
          <img slot="first" style="width: 100%" src="/white-before.jpg" />
          <img slot="second" style="width: 100%" src="/white-after.png" />
          <!-- eslint-enable -->
        </ImgComparisonSlider>
      </div>
    </div>
  </div>
</template>
<script>
import { ImgComparisonSlider } from "@img-comparison-slider/vue";

export default {
  name: "ExampleComponent",
  components: {
    ImgComparisonSlider,
  },
};
</script>
