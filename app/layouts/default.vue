<script setup lang="ts">
import NavBar from "~/components/NavBar.vue";
</script>

<template>
  <!-- Centered container with max width and min height of screen -->
  <div class="min-h-screen flex flex-col w-screen justify-center items-center">
    <NavBar />
    <div class="min-h-screen w-full">
      <slot />
    </div>
    <AppFooter />
  </div>
</template>
