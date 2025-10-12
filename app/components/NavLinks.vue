<template>
  <NuxtLink to="/#home" class="hover:text-button">{{
    $t("nav.home")
  }}</NuxtLink>
  <NuxtLink to="/#about" class="hover:text-button">{{
    $t("nav.about")
  }}</NuxtLink>
  <NuxtLink to="/#contact" class="hover:text-button">
    {{ $t("nav.contact") }}
  </NuxtLink>
  <NuxtLink to="/blog" class="hover:text-button">
    {{ $t("nav.blog") }}
  </NuxtLink>
  <NuxtLink to="/pricing" class="hover:text-button">
    {{ $t("nav.pricing") }}
  </NuxtLink>
</template>
