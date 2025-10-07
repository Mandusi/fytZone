<template>
  <!-- Centered container with max width and min height of screen -->
  <div class="min-h-screen flex flex-col justify-center items-center">
    <!--Toast-->
    <UToaster position="bottom-right" color="secondary" />

    <NavBar class="fixed top-0 z-10 bg-primary-bg" />
    <div class="min-h-screen w-full">
      <slot />
    </div>
    <AppFooter />
  </div>
</template>

<script setup></script>
