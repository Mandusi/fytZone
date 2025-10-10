<template>
  <div class="min-h-screen w-full flex justify-center">
    <BlogDetail
      :title="$t('blogs.nutritionTipsForFitness.title')"
      :content="$t('blogs.nutritionTipsForFitness.content')"
      image-url="/blog/nutrition-tips-for-fitness.png"
    />
  </div>
</template>
<script setup>
const { t } = useI18n();

useSeoMeta({
  title: "Nutrition Tips for Fitness - FytZone",
  description: t("blogPosts.nutritionTips.seoDescription"),
});
</script>
