<template>
  <!-- Centered container with max width and min height of screen -->
  <div class="min-h-screen flex flex-col justify-center items-center">
    <!--Toast-->
    <UToaster position="bottom-right" color="secondary" />

    <NavBar />
    <div class="min-h-screen w-full">
      <slot />
    </div>
    <AppFooter />
  </div>
</template>

<script setup></script>
