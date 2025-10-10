<template>
  <div class="min-h-screen w-full flex justify-center">
    <BlogDetail
      :title="$t('blogs.apartmentFitness.title')"
      :content="$t('blogs.apartmentFitness.content')"
      image-url="/blog/small-apartment-fitness-ideas.png"
    />
  </div>
</template>
<script setup>
const { t } = useI18n();

useSeoMeta({
  title: "Apartment Fitness Ideas - FytZone",
  description: t("blogPosts.apartmentFitness.seoDescription"),
});
</script>
