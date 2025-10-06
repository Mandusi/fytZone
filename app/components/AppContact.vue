<template>
  <div
    id="contact"
    class="flex w-full h-[calc(100vh-127px)] justify-center items-center"
  >
    <form
      class="flex flex-col p-2 md:p-0 gap-4 w-full max-w-4xl mt-8"
      @submit.prevent="handleSubmit"
    >
      <h2 class="text-black dark:text-primary-text">Contact</h2>
      <p class="mt-4 text-lg">
        {{ $t("contact.description") }}
      </p>
      <UInput
        v-model="email"
        color="secondary"
        icon="i-lucide-at-sign"
        :placeholder="$t('contact.emailPlaceholder')"
        size="md"
      />

      <UTextarea
        v-model="message"
        color="secondary"
        :rows="7"
        :placeholder="$t('contact.messagePlaceholder')"
        class="variant-outline"
      />
      <div class="flex justify-end">
        <UButton
          color="secondary"
          type="submit"
          class="px-16 py-2 text-white bg-button rounded-full"
        >
          {{ $t("contact.send") }}
        </UButton>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
const email = ref("");
const message = ref("");

const handleSubmit = () => {
  console.log("Email:", email.value);
  console.log("Message:", message.value);
};
</script>
