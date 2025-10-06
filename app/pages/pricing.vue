<template>
  <div class="min-h-screen">
    <div class="flex w-full h-[calc(100vh-75px)] justify-center items-center">
      <div
        class="flex flex-col items-center justify-center max-w-4xl text-center gap-8 px-4 sm:px-6 lg:px-8"
      >
        <h1 class="text-gray-900 dark:text-white">
          {{ $t("pricing.title") }}
          <span
            class="bg-gradient-to-b from-blue-600 to-purple-600 text-transparent bg-clip-text"
          >
            {{ $t("pricing.titleHighlight") }}
          </span>
        </h1>

        <p class="text-lg max-w-2xl text-gray-600 dark:text-gray-300">
          {{ $t("pricing.description") }}
        </p>
      </div>
    </div>

    <div class="w-full py-20 flex items-center justify-center">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="plan in plans"
            :key="plan.name"
            class="relative flex flex-col gap-1 rounded-2xl p-8 justify-between border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
            :class="{
              'ring-2 ring-blue-500 ring-opacity-50 scale-[1.02] shadow-2xl':
                plan.popular,
            }"
          >
            <div
              v-if="plan.popular"
              class="absolute -top-4 left-1/2 transform -translate-x-1/2"
            >
              <span
                class="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold"
              >
                {{ $t("pricing.popular") }}
              </span>
            </div>

            <div class="text-center">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {{ $t(`pricing.plans.${plan.name}.name`) }}
              </h3>
              <div class="mb-4">
                <span class="text-5xl font-bold text-gray-900 dark:text-white">
                  {{ plan.price === 0 ? $t("pricing.free") : `$${plan.price}` }}
                </span>
                <span
                  v-if="plan.price > 0"
                  class="text-gray-600 dark:text-gray-400 text-lg"
                >
                  /{{ $t(`pricing.${plan.period}`) }}
                </span>
              </div>
              <p class="text-gray-600 dark:text-gray-400">
                {{ $t(`pricing.plans.${plan.name}.description`) }}
              </p>
            </div>

            <div>
              <ul>
                <li
                  v-for="feature in plan.features"
                  :key="feature"
                  class="flex items-center gap-3"
                >
                  <UIcon
                    name="i-lucide-check"
                    size="20"
                    class="text-green-500 flex-shrink-0"
                  />
                  <span class="text-gray-600 dark:text-gray-400">
                    {{ $t(`pricing.features.${feature}`) }}
                  </span>
                </li>
              </ul>
            </div>

            <UButton
              :variant="plan.popular ? 'solid' : 'outline'"
              size="lg"
              class="w-full font-semibold"
              :class="
                plan.popular
                  ? 'bg-blue-600 hover:bg-blue-700 text-white border-0 rounded-full'
                  : ' rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-600 dark:hover:text-white'
              "
              @click="handlePlanSelection(plan)"
            >
              {{
                plan.price === 0
                  ? $t("pricing.getStarted")
                  : $t("pricing.choosePlan")
              }}
            </UButton>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full py-20 flex items-center justify-center">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-gray-900 dark:text-white mb-4">
            {{ $t("pricing.faq.title") }}
          </h2>
          <p class="text-gray-600 dark:text-gray-300 text-lg">
            {{ $t("pricing.faq.subtitle") }}
          </p>
        </div>

        <div class="flex flex-col gap-2">
          <UCard
            v-for="(faq, index) in 4"
            :key="index"
            class="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
          >
            <h3 class="font-semibold text-gray-900 dark:text-white mb-3">
              {{ $t(`pricing.faq.questions.q${index + 1}.question`) }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              {{ $t(`pricing.faq.questions.q${index + 1}.answer`) }}
            </p>
          </UCard>
        </div>
      </div>
    </div>

    <div class="w-full py-20 flex items-center justify-center">
      <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 class="text-gray-900 dark:text-white mb-4">
          {{ $t("pricing.cta.title") }}
        </h2>
        <p class="text-gray-600 dark:text-gray-300 text-lg">
          {{ $t("pricing.cta.description") }}
        </p>
        <UButton
          icon="i-lucide-mail"
          size="lg"
          color="primary"
          variant="solid"
          class="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white"
          @click="$router.push('/#contact')"
        >
          {{ $t("pricing.cta.button") }}
        </UButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Pricing - FytZone",
});

interface PricingPlan {
  name: string;
  popular: boolean;
  price: number;
  period: string;
  features: string[];
}

const plans: PricingPlan[] = [
  {
    name: "starter",
    popular: false,
    price: 0,
    period: "month",
    features: [
      "basic.design",
      "basic.layouts",
      "basic.support",
      "basic.exports",
    ],
  },
  {
    name: "professional",
    popular: true,
    price: 29,
    period: "month",
    features: [
      "pro.unlimited",
      "pro.advanced",
      "pro.templates",
      "pro.priority",
      "pro.analytics",
      "pro.export",
    ],
  },
  {
    name: "enterprise",
    popular: false,
    price: 99,
    period: "month",
    features: [
      "enterprise.everything",
      "enterprise.custom",
      "enterprise.dedicated",
      "enterprise.onboarding",
      "enterprise.sla",
      "enterprise.api",
    ],
  },
];

const router = useRouter();

const handlePlanSelection = (plan: PricingPlan) => {
  console.log(`Selected plan: ${plan.name}`);

  if (plan.price === 0) {
    // Navigate to demo for free plan
    router.push("/demo");
  } else {
    // Navigate to contact for paid plans
    router.push("/#contact");
  }
};
</script>
