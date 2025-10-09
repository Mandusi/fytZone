<template>
  <div
    class="min-h-screen flex justify-center items-center flex-col gap-10 pt-20"
  >
    <!-- Hero Section -->
    <div
      class="flex w-full max-w-4xl gap-5 justify-center items-center max-sm:px-3"
    >
      <div class="flex flex-col items-center justify-center text-center gap-3">
        <h1 class="text-gray-900 dark:text-white">
          {{ $t("pricing.title") }}
          <span
            class="bg-gradient-to-b from-blue-600 to-purple-600 text-transparent bg-clip-text"
          >
            {{ $t("pricing.titleHighlight") }}
          </span>
        </h1>

        <p class="md:text-lg text-sm text-primary-text">
          {{ $t("pricing.description") }}
        </p>
      </div>
    </div>

    <!-- Subscription Plans Section -->
    <div class="w-full flex items-center justify-center">
      <div class="flex pb-10 max-sm:pb-5 flex-col gap-1 max-w-4xl max-sm:px-3">
        <!-- Billing Toggle -->
        <div class="flex justify-center pb-7">
          <div
            class="bg-white dark:bg-secondary-bg p-1 rounded-full border border-gray-200 dark:border-gray-700"
          >
            <button
              class="px-6 py-2 rounded-full text-sm font-medium transition-all"
              :class="
                !isYearly
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 dark:text-gray-400'
              "
              @click="isYearly = false"
            >
              {{ $t("pricing.monthly") }}
            </button>
            <button
              class="px-6 py-2 rounded-full text-sm font-medium transition-all"
              :class="
                isYearly
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 dark:text-gray-400'
              "
              @click="isYearly = true"
            >
              {{ $t("pricing.yearly") }}
              <span
                class="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full"
              >
                {{ $t("pricing.save20") }}
              </span>
            </button>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="plan in plans"
            :key="plan.name"
            class="relative flex flex-col gap-6 rounded-2xl p-8 justify-between border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] bg-white dark:bg-secondary-bg"
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
                class="bg-gradient-to-r from-blue-600 to-purple-600 text-white whitespace-nowrap px-6 py-2 rounded-full text-sm font-semibold"
              >
                {{ $t("pricing.popular") }}
              </span>
            </div>

            <div class="text-center">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {{ $t(`pricing.plans.${plan.name}.name`) }}
              </h3>
              <div class="mb-4">
                <div class="flex items-center justify-center gap-2">
                  <span
                    v-if="getOriginalPrice(plan)"
                    class="text-lg text-primary-text line-through"
                  >
                    ${{ getOriginalPrice(plan) }}
                  </span>
                  <span
                    class="text-5xl font-bold text-gray-900 dark:text-white"
                  >
                    {{
                      plan.price === 0
                        ? $t("pricing.free")
                        : `$${getCurrentPrice(plan)}`
                    }}
                  </span>
                </div>
                <span v-if="plan.price > 0" class="text-primary-text text-lg">
                  /{{ isYearly ? $t("pricing.year") : $t("pricing.month") }}
                </span>
                <div
                  v-if="getSavings(plan)"
                  class="text-green-600 text-sm font-medium mt-1"
                >
                  {{ $t("pricing.save") }} ${{ getSavings(plan) }}/{{
                    $t("pricing.year")
                  }}
                </div>
              </div>
              <p class="text-primary-text">
                {{ $t(`pricing.plans.${plan.name}.description`) }}
              </p>
            </div>

            <div>
              <ul class="space-y-3">
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
                  <span>
                    {{ $t(`pricing.features.${feature}`) }}
                  </span>
                </li>
              </ul>
            </div>

            <UButton
              :variant="plan.popular ? 'solid' : 'outline'"
              size="lg"
              class="w-full font-semibold flex justify-center"
              :class="
                plan.popular
                  ? 'bg-blue-600 hover:bg-blue-700 text-white  border-0 rounded-full'
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
  yearlyPrice: number;
  period: string;
  features: string[];
  type: "subscription" | "onetime";
}

const isYearly = ref(false);

const plans: PricingPlan[] = [
  {
    name: "starter",
    popular: false,
    price: 0,
    yearlyPrice: 0,
    period: "month",
    type: "subscription",
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
    yearlyPrice: 290,
    period: "month",
    type: "subscription",
    features: [
      "pro.unlimited",
      "pro.advanced",
      "pro.templates",
      "pro.priority",
      "pro.analytics",
    ],
  },
  {
    name: "enterprise",
    popular: false,
    price: 99,
    yearlyPrice: 990,
    period: "month",
    type: "subscription",
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
    router.push("/demo");
  } else {
    router.push("/#contact");
  }
};

const getCurrentPrice = (plan: PricingPlan) => {
  if (plan.type === "onetime") return plan.price;
  return isYearly.value ? Math.round(plan.yearlyPrice / 12) : plan.price;
};

const getOriginalPrice = (plan: PricingPlan) => {
  if (plan.type === "onetime") return null;
  return isYearly.value ? plan.price : null;
};

const getSavings = (plan: PricingPlan) => {
  if (plan.type === "onetime" || !isYearly.value) return null;
  const yearlyTotal = plan.price * 12;
  const savings = yearlyTotal - plan.yearlyPrice;
  return savings;
};
</script>
