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
useSeoMeta({
  title: "Apartment Fitness Ideas - FytZone",
  description:
    "Discover creative apartment fitness ideas to stay active and healthy in small spaces. Learn how to make the most of your apartment for effective workouts.",
});
</script>
