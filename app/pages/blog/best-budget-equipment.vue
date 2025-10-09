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
useSeoMeta({
  title: "Best Budget Equipment for Home Gyms - FytZone",
  description:
    "Discover the best budget-friendly equipment for building an effective home gym. Learn how to create a space-friendly workout setup without breaking the bank.",
});
</script>
