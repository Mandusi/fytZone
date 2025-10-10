<template>
  <div class="min-h-screen w-full flex justify-center">
    <BlogDetail
      :title="$t('blogs.budgetEquipment.title')"
      :content="$t('blogs.budgetEquipment.content')"
      image-url="/blog/best-budget-equipment.jpg"
    />
  </div>
</template>
<script setup>
const { t } = useI18n();

useSeoMeta({
  title: "Best Budget Equipment for Home Gyms - FytZone",
  description: t("blogPosts.bestBudgetEquipment.seoDescription"),
});
</script>
