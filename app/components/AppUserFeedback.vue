<template>
  <div
    class="w-full max-w-screen py-10 flex bg-secondary-bg justify-center items-center max-sm:px-3 overflow-hidden px-4"
  >
    <div class="flex max-sm:flex-col gap-3">
      <UPageCard
        v-for="(testimonial, index) in testimonials"
        :key="index"
        variant="subtle"
        :description="testimonial.quote"
        class="w-84 h-64 max-sm:w-72 max-sm:h-60 !m-0"
      >
        <template #footer>
          <UUser
            v-bind="testimonial.user"
            size="xl"
            :ui="{ description: 'line-clamp-1' }"
          />
        </template>
      </UPageCard>
    </div>
  </div>
</template>
<script setup>
const testimonials = computed(() => [
  {
    user: {
      name: $t("about.testimonials.sarahMitchell.name"),
      description: $t("about.testimonials.sarahMitchell.description"),
      avatar: {
        src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
        loading: "lazy",
      },
    },
    quote: $t("about.testimonials.sarahMitchell.quote"),
  },
  {
    user: {
      name: $t("about.testimonials.marcusRodriguez.name"),
      description: $t("about.testimonials.marcusRodriguez.description"),
      avatar: {
        src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
        loading: "lazy",
      },
    },
    quote: $t("about.testimonials.marcusRodriguez.quote"),
  },
  {
    user: {
      name: $t("about.testimonials.emmaChen.name"),
      description: $t("about.testimonials.emmaChen.description"),
      avatar: {
        src: "https://images.unsplash.com/photo-1494790108755-2616b12166b5?w=400&h=400&fit=crop&crop=face",
        loading: "lazy",
      },
    },
    quote: $t("about.testimonials.emmaChen.quote"),
  },
  {
    user: {
      name: $t("about.testimonials.jakeThompson.name"),
      description: $t("about.testimonials.jakeThompson.description"),
      avatar: {
        src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
        loading: "lazy",
      },
    },
    quote: $t("about.testimonials.jakeThompson.quote"),
  },
]);
</script>
