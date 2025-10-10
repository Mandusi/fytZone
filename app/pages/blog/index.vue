<template>
  <div class="flex w-full min-h-screen justify-center">
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
          :title="post.title"
          :content="post.content"
          :image-url="post.imageUrl"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const posts = [
  {
    title: "Best Budget Equipment for Home Gyms",
    content:
      "Discover the best budget-friendly equipment for building an effective home gym. Learn how to create a space-friendly workout setup without breaking the bank.",
    imageUrl: "/blog/best-budget-equipment.jpg",
  },
  {
    title: "Apartment Fitness Ideas",
    content:
      "Discover creative apartment fitness ideas to stay active and healthy in small spaces. Learn how to make the most of your apartment for effective workouts.",
    imageUrl: "/blog/small-apartment-fitness-ideas.png",
  },
  {
    title: "Home Gym Setup Tips",
    content:
      "Learn essential home gym setup tips to create an efficient and motivating workout space. Discover how to optimize your home gym for better fitness results.",
    imageUrl: "/blog/small-apartment-fitness-ideas.png",
  },
  {
    title: "Effective Bodyweight Exercises",
    content:
      "Explore effective bodyweight exercises that you can do anywhere. Learn how to build strength and endurance without any equipment.",
    imageUrl: "/blog/small-apartment-fitness-ideas.png",
  },
  {
    title: "Nutrition Tips for Fitness",
    content:
      "Get essential nutrition tips to support your fitness goals. Learn how to fuel your body for optimal performance and recovery.",
    imageUrl: "/blog/small-apartment-fitness-ideas.png",
  },
  {
    title: "Staying Motivated to Exercise",
    content:
      "Discover strategies to stay motivated and consistent with your exercise routine. Learn how to overcome common challenges and keep pushing towards your fitness goals.",
    imageUrl: "/blog/small-apartment-fitness-ideas.png",
  },
];
</script>
