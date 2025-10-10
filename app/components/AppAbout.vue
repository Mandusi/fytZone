<template>
  <div
    id="about"
    class="flex flex-col gap-5 w-full h-[calc(100vh-127px)] max-sm:h-calc bg-secondary-bg justify-center items-center"
  >
    <div class="max-w-4xl flex flex-col max-sm:px-3 gap-8 max-sm:gap-5">
      <p class="text-black dark:text-primary-text text-3xl max-sm:text-2xl">
        {{ $t("nav.about") }}
      </p>
      <p class="text-lg max-sm:text-sm">
        {{ $t("about.description") }}
      </p>

      <div class="flex gap-5 items-center">
        <UIcon
          name="i-lucide-dumbbell"
          :size="isOnMobile ? 20 : 24"
          class="bg-button dark:bg-blue-300"
        />
        <p class="max-sm:text-xs">
          {{ $t("about.features.equipment") }}
        </p>
      </div>

      <div class="flex gap-5 items-center">
        <UIcon
          name="i-lucide-activity"
          :size="isOnMobile ? 20 : 24"
          class="bg-button dark:bg-blue-300"
        />
        <p class="max-sm:text-xs">
          {{ $t("about.features.activity") }}
        </p>
      </div>

      <div class="flex gap-5 items-center">
        <UIcon
          name="i-lucide-heart"
          :size="isOnMobile ? 20 : 24"
          class="bg-button dark:bg-blue-300"
        />
        <p class="max-sm:text-xs">
          {{ $t("about.features.health") }}
        </p>
      </div>
    </div>
    <div class="flex flex-col gap-4 max-w-4xl">
      <UMarquee
        pause-on-hover
        :overlay="false"
        :ui="{ root: '[--gap:--spacing(4)]', content: 'w-auto py-1' }"
      >
        <UPageCard
          v-for="(testimonial, index) in testimonials"
          :key="index"
          variant="subtle"
          :description="testimonial.quote"
          :ui="{
            description:
              'before:content-[open-quote] after:content-[close-quote] line-clamp-3',
          }"
          class="w-64 shrink-0"
        >
          <template #footer>
            <UUser
              v-bind="testimonial.user"
              size="xl"
              :ui="{ description: 'line-clamp-1' }"
            />
          </template>
        </UPageCard>
      </UMarquee>
      <UMarquee
        pause-on-hover
        reverse
        :overlay="false"
        :ui="{ root: '[--gap:--spacing(4)]', content: 'w-auto py-1' }"
      >
        <UPageCard
          v-for="(testimonial, index) in testimonials"
          :key="index"
          variant="subtle"
          :description="testimonial.quote"
          :ui="{
            description:
              'before:content-[open-quote] after:content-[close-quote] line-clamp-3',
          }"
          class="w-64 shrink-0"
        >
          <template #footer>
            <UUser
              v-bind="testimonial.user"
              size="xl"
              :ui="{ description: 'line-clamp-1' }"
            />
          </template>
        </UPageCard>
      </UMarquee>
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n();

const isOnMobile = ref(false);
onMounted(() => {
  if (window.innerWidth <= 640) {
    isOnMobile.value = true;
  }
});

const testimonials = computed(() => [
  {
    user: {
      name: t("about.testimonials.sarahMitchell.name"),
      description: t("about.testimonials.sarahMitchell.description"),
      avatar: {
        src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
        loading: "lazy",
      },
    },
    quote: t("about.testimonials.sarahMitchell.quote"),
  },
  {
    user: {
      name: t("about.testimonials.marcusRodriguez.name"),
      description: t("about.testimonials.marcusRodriguez.description"),
      avatar: {
        src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
        loading: "lazy",
      },
    },
    quote: t("about.testimonials.marcusRodriguez.quote"),
  },
  {
    user: {
      name: t("about.testimonials.emmaChen.name"),
      description: t("about.testimonials.emmaChen.description"),
      avatar: {
        src: "https://images.unsplash.com/photo-1494790108755-2616b12166b5?w=400&h=400&fit=crop&crop=face",
        loading: "lazy",
      },
    },
    quote: t("about.testimonials.emmaChen.quote"),
  },
  {
    user: {
      name: t("about.testimonials.jakeThompson.name"),
      description: t("about.testimonials.jakeThompson.description"),
      avatar: {
        src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
        loading: "lazy",
      },
    },
    quote: t("about.testimonials.jakeThompson.quote"),
  },
  {
    user: {
      name: t("about.testimonials.lisaPark.name"),
      description: t("about.testimonials.lisaPark.description"),
      avatar: {
        src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
        loading: "lazy",
      },
    },
    quote: t("about.testimonials.lisaPark.quote"),
  },
  {
    user: {
      name: t("about.testimonials.alexRivera.name"),
      description: t("about.testimonials.alexRivera.description"),
      avatar: {
        src: "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=400&h=400&fit=crop&crop=face",
        loading: "lazy",
      },
    },
    quote: t("about.testimonials.alexRivera.quote"),
  },
  {
    user: {
      name: t("about.testimonials.rachelFoster.name"),
      description: t("about.testimonials.rachelFoster.description"),
      avatar: {
        src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
        loading: "lazy",
      },
    },
    quote: t("about.testimonials.rachelFoster.quote"),
  },
  {
    user: {
      name: t("about.testimonials.carlosMartinez.name"),
      description: t("about.testimonials.carlosMartinez.description"),
      avatar: {
        src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
        loading: "lazy",
      },
    },
    quote: t("about.testimonials.carlosMartinez.quote"),
  },
]);
</script>
