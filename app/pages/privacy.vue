<template>
  <div
    class="min-h-screen flex justify-center items-center flex-col gap-10 max-sm:p-4"
  >
    <!-- Header -->
    <div class="flex w-full max-w-4xl justify-center items-center">
      <div class="flex flex-col items-center justify-center text-center">
        <p class="text-5xl font-bold max-sm:text-3xl">Privacy Policy</p>
      </div>
    </div>

    <!-- Privacy Content -->
    <div class="w-full flex items-center justify-center">
      <div class="max-w-4xl w-full flex flex-col gap-3">
        <div v-for="item in privacyItems" :key="item.label">
          <p class="text-3xl font-semibold max-sm:text-xl">
            {{ item.label }}
          </p>
          <div class="text-secondary-text max-sm:text-sm">
            {{ item.content }}
          </div>
        </div>
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
