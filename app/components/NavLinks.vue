<template>
  <NuxtLink
    to="/#home"
    class="hover:text-button"
    :class="{ 'text-text-primary': true }"
    >{{ $t("nav.home") }}</NuxtLink
  >
  <NuxtLink
    to="/#about"
    class="hover:text-button"
    :class="{ 'text-text-primary': true }"
    >{{ $t("nav.about") }}</NuxtLink
  >
  <NuxtLink
    to="/#contact"
    class="hover:text-button"
    :class="{ 'text-text-primary': true }"
  >
    {{ $t("nav.contact") }}
  </NuxtLink>
  <NuxtLink
    to="/blog"
    class="hover:text-button"
    :class="{ 'text-text-primary': true }"
  >
    {{ $t("nav.blog") }}
  </NuxtLink>
  <NuxtLink
    to="/pricing"
    class="hover:text-button"
    :class="{ 'text-text-primary': true }"
  >
    {{ $t("nav.pricing") }}
  </NuxtLink>
</template>
