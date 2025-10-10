<template>
  <div class="min-h-screen w-full flex justify-center">
    <BlogDetail
      :title="$t('blogs.effectiveBodyweightExercises.title')"
      :content="$t('blogs.effectiveBodyweightExercises.content')"
      image-url="/blog/effective-bodyweight-exercises.png"
    />
  </div>
</template>
<script setup>
const { t } = useI18n();

useSeoMeta({
  title: "Effective Bodyweight Exercises - FytZone",
  description: t("blogPosts.bodyweightExercises.seoDescription"),
});
</script>
