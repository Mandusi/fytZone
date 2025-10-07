<template>
  <div class="min-h-screen flex justify-center items-center flex-col gap-10">
    <!-- Hero Section -->
    <div class="flex w-full max-w-4xl pt-8 gap-5 justify-center items-center">
      <div
        class="flex flex-col items-center justify-center text-center gap-4 px-4 sm:px-6 lg:px-8"
      >
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
      <div class="flex flex-col gap-1 max-w-4xl px-4 md:px-0">
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

    <!-- Equipment Recommendations -->
    <div class="w-full py-20 flex items-center justify-center">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {{ $t("pricing.equipment.title") }}
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            {{ $t("pricing.equipment.subtitle") }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="item in equipment"
            :key="item.name"
            class="bg-white dark:bg-gray-800 h-full rounded-xl p-6 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg hover:scale-105 flex flex-col justify-between"
          >
            <div
              class="aspect-square bg-gray-100 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center"
            >
              <UIcon
                :name="`i-lucide-${
                  item.category === 'mat'
                    ? 'square'
                    : item.category === 'dumbbell'
                    ? 'dumbbell'
                    : item.category === 'mirror'
                    ? 'mirror'
                    : 'zap'
                }`"
                size="48"
                class="text-gray-400"
              />
            </div>

            <h3 class="font-semibold text-gray-900 dark:text-white mb-2">
              {{ $t(`pricing.${item.name}`) }}
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
              {{ $t(`pricing.${item.description}`) }}
            </p>

            <div class="flex flex-col justify-self-end">
              <div class="flex items-center justify-between mb-3">
                <span class="text-lg font-bold text-gray-900 dark:text-white">
                  {{ item.price }}
                </span>
                <div class="flex items-center gap-1">
                  <UIcon
                    name="i-lucide-star"
                    size="16"
                    class="text-yellow-400"
                  />
                  <span class="text-sm text-gray-600 dark:text-gray-400">
                    {{ item.rating }}
                  </span>
                </div>
              </div>

              <div class="text-xs text-gray-500 dark:text-gray-500 mb-4">
                {{ $t("pricing.equipment.partner") }}: {{ item.affiliate }}
              </div>

              <UButton
                variant="outline"
                size="sm"
                class="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400"
                :class="{
                  'rounded-full': true,
                }"
              >
                {{ $t("pricing.equipment.viewProduct") }}
              </UButton>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- FAQ Section -->
    <div class="w-full py-20 flex items-center justify-center">
      <div class="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-gray-900 dark:text-white mb-4">
            {{ $t("pricing.faq.title") }}
          </h2>
          <p class="text-gray-600 dark:text-gray-300 text-lg">
            {{ $t("pricing.faq.subtitle") }}
          </p>
        </div>

        <UAccordion
          :items="faqItems"
          class="w-full"
          :ui="{
            content: 'w-full',
            body: 'w-full',
            trigger: 'w-full justify-between text-xl max-sm:text-base',
          }"
        />
      </div>
    </div>

    <!-- Contact CTA Section -->
    <div class="w-full py-20 flex items-center justify-center">
      <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 class="text-gray-900 dark:text-white mb-4">
          {{ $t("pricing.cta.title") }}
        </h2>
        <p class="text-gray-600 dark:text-gray-300 text-lg mb-8">
          {{ $t("pricing.cta.description") }}
        </p>
        <UButton
          icon="i-lucide-mail"
          size="lg"
          color="primary"
          variant="solid"
          class="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full"
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
  description:
    "Choose your perfect gym design plan with monthly, yearly, or one-time packages. Plus equipment recommendations from trusted partners.",
  ogTitle: "FytZone Pricing - AI Gym Design Plans & Equipment",
  ogDescription:
    "Transform your fitness space with flexible pricing options and curated equipment recommendations.",
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

interface Equipment {
  name: string;
  category: string;
  price: string;
  image: string;
  affiliate: string;
  rating: number;
  description: string;
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
      "pro.export",
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

const equipment: Equipment[] = [
  {
    name: "equipment.yoga.name",
    category: "mat",
    price: "$89.99",
    image: "/equipment/yoga-mat.jpg",
    affiliate: "Amazon",
    rating: 4.8,
    description: "equipment.yoga.description",
  },
  {
    name: "equipment.dumbbells.name",
    category: "dumbbell",
    price: "$299.99",
    image: "/equipment/dumbbells.jpg",
    affiliate: "REP Fitness",
    rating: 4.9,
    description: "equipment.dumbbells.description",
  },
  {
    name: "equipment.mirror.name",
    category: "mirror",
    price: "$1,299.99",
    image: "/equipment/mirror.jpg",
    affiliate: "Mirror",
    rating: 4.7,
    description: "equipment.mirror.description",
  },
  {
    name: "equipment.trx.name",
    category: "trx",
    price: "$195.00",
    image: "/equipment/trx.jpg",
    affiliate: "TRX",
    rating: 4.9,
    description: "equipment.trx.description",
  },
];

const router = useRouter();

// FAQ items for accordion
const faqItems = computed(() => [
  {
    label: $t("pricing.faq.questions.q1.question"),
    content: $t("pricing.faq.questions.q1.answer"),
  },
  {
    label: $t("pricing.faq.questions.q2.question"),
    content: $t("pricing.faq.questions.q2.answer"),
  },
  {
    label: $t("pricing.faq.questions.q3.question"),
    content: $t("pricing.faq.questions.q3.answer"),
  },
  {
    label: $t("pricing.faq.questions.q4.question"),
    content: $t("pricing.faq.questions.q4.answer"),
  },
]);

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
