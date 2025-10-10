<template>
  <div class="min-h-screen w-full flex justify-center">
    <BlogDetail
      :title="$t('blogs.homeGymSetupTips.title')"
      :content="$t('blogs.homeGymSetupTips.content')"
      image-url="/blog/home-gym-setup-tips.png"
    />
  </div>
</template>
<script setup>
const { t } = useI18n();

useSeoMeta({
  title: "Home Gym Setup Tips - FytZone",
  description: t("blogPosts.homeGymSetup.seoDescription"),
});
</script>
