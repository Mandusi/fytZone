<template>
  <ImgComparisonSlider
    class="slider-example-focus slider-example-split-line h-auto rounded-xl"
    tabindex="0"
    :value="position"
  >
    <img
      slot="first"
      style="width: 100%; object-fit: contain"
      :src="
        images
          ? images.before
          : useColorMode().value === 'dark'
            ? '/dark-before.jpg'
            : '/white-before.jpg'
      "
    />
    <img
      slot="second"
      style="width: 100%"
      :src="
        images
          ? images.after
          : useColorMode().value === 'dark'
            ? '/dark-after.png'
            : '/white-after.png'
      "
    />
  </ImgComparisonSlider>
</template>

<script setup>
import { ImgComparisonSlider } from "@img-comparison-slider/vue";

const props = defineProps({
  images: {
    type: { before: String, after: String },
    default: () => null,
  },
});

const position = ref(100);

function move(start, end, duration, delay = 0) {
  const easeInOut = (t) =>
    t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

  return new Promise((resolve) => {
    setTimeout(() => {
      const startTime = performance.now();

      function step(now) {
        const rawProgress = Math.min((now - startTime) / duration, 1);
        const easedProgress = easeInOut(rawProgress);

        position.value = start + (end - start) * easedProgress;

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
async function animate() {
  await move(100, 0, 1200); // back to 50 in 400ms
  await move(0, 100, 1200); // rise in 1s
  await move(100, 50, 1200); // back to 50 in 400ms
}

watch(
  () => props.images,
  () => {
    if (props.images) move(100, 0, 1000, 0);
    else animate();
  }
);

onMounted(() => animate());
</script>

<style scoped>
.slider-example-focus {
  transition: box-shadow 200ms ease-in-out;
}

.slider-example-focus:focus {
  outline: none;
}

.slider-example-split-line {
  --divider-width: 4px;

  --divider-color: var(--color-primary-text);
  --default-handle-color: var(--color-primary-text);
  --default-handle-width: 40px;
  --hover-handle-width: 80px;
}
</style>
