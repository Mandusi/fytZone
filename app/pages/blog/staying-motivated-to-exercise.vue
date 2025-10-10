<template>
  <div class="min-h-screen w-full flex justify-center">
    <BlogDetail
      :title="$t('blogs.stayingMotivatedToExercise.title')"
      :content="$t('blogs.stayingMotivatedToExercise.content')"
      image-url="/blog/staying-motivated-to-exercise.png"
    />
  </div>
</template>
<script setup>
const { t } = useI18n();

useSeoMeta({
  title: "Staying Motivated to Exercise - FytZone",
  description: t("blogPosts.stayingMotivated.seoDescription"),
});
</script>
