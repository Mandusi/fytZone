<template>
  <div class="min-h-screen flex justify-center items-center flex-col gap-10">
    <!-- Header -->
    <div class="flex w-full max-w-4xl justify-center items-center">
      <div class="flex flex-col items-center justify-center text-center gap-3">
        <h1 class="text-gray-900 dark:text-white text-5xl font-bold">
          Privacy Policy
        </h1>
      </div>
    </div>

    <!-- Introduction -->
    <div class="w-full flex items-center justify-center">
      <div class="max-w-4xl text-center">
        <p class="text-xl text-primary-text">
          {{ $t("privacy.mainMessage") }}
        </p>
        <p class="text-secondary-text">
          {{ $t("privacy.mainDescription") }}
        </p>
      </div>
    </div>

    <!-- Privacy Accordion -->
    <div class="w-full flex items-center justify-center">
      <div class="max-w-4xl w-full">
        <UAccordion
          :items="privacyItems"
          class="w-full"
          :ui="{
            content: 'w-full',
            body: 'w-full',
            trigger: 'w-full justify-between text-xl max-sm:text-base',
          }"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Privacy & Security - FytZone",
});

const { t } = useI18n();

// Privacy accordion items
const privacyItems = computed(() => [
  {
    label: t("privacy.technicalSecurity.title"),
    content: t("privacy.technicalSecurity.content"),
  },
  {
    label: t("privacy.compliance.title"),
    content: t("privacy.compliance.content"),
  },
  {
    label: t("privacy.dataProcessing.title"),
    content: t("privacy.dataProcessing.content"),
  },
]);
</script>
