<template>
  <div class="flex w-full min-h-[100vh-127px] justify-center">
    <div class="max-w-4xl flex flex-col gap-10 justify-start items-center py-3">
      <div class="w-full p-3 md:p-0 grid grid-cols-2 md:grid-cols-3 gap-3">
        <blog-card
          :title="posts[0].title"
          :content="posts[0].content"
          :image-url="posts[0].imageUrl"
          class="col-span-3 md:col-span-2"
        />
        <BlogCard
          v-for="post in posts"
          :key="post.title"
          :url="post.url"
          :title="post.title"
          :content="post.content"
          :image-url="post.imageUrl"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n();

const posts = [
  {
    title: t("blogPosts.bestBudgetEquipment.title"),
    url: "best-budget-equipment-for-home-gyms",
    content: t("blogPosts.bestBudgetEquipment.description"),
    imageUrl: "/blog/best-budget-equipment.jpg",
  },
  {
    title: t("blogPosts.apartmentFitness.title"),
    url: "apartment-fitness-ideas",
    content: t("blogPosts.apartmentFitness.description"),
    imageUrl: "/blog/small-apartment-fitness-ideas.png",
  },
  {
    title: t("blogPosts.homeGymSetup.title"),
    url: "home-gym-setup-tips",
    content: t("blogPosts.homeGymSetup.description"),
    imageUrl: "/blog/home-gym-setup-tips.png",
  },
  {
    title: t("blogPosts.bodyweightExercises.title"),
    url: "effective-bodyweight-exercises",
    content: t("blogPosts.bodyweightExercises.description"),
    imageUrl: "/blog/effective-bodyweight-exercises.png",
  },
  {
    title: t("blogPosts.nutritionTips.title"),
    url: "nutrition-tips-for-fitness",
    content: t("blogPosts.nutritionTips.description"),
    imageUrl: "/blog/nutrition-tips-for-fitness.png",
  },
  {
    title: t("blogPosts.stayingMotivated.title"),
    url: "staying-motivated-to-exercise",
    content: t("blogPosts.stayingMotivated.description"),
    imageUrl: "/blog/staying-motivated-to-exercise.png",
  },
];
</script>
