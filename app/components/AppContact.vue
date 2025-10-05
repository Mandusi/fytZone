<template>
  <div id="contact" class="flex w-full h-screen justify-center items-center">
    <form
      class="flex flex-col p-2 md:p-0 gap-4 w-full max-w-4xl mt-8"
      @submit.prevent="handleSubmit"
    >
      <h2 class="text-4xl font-bold font-[Inter]">Contact</h2>
      <p class="mt-4 text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
        veritatis? At, minima impedit explicabo cumque molestiae reiciendis
        repellat?
      </p>
      <UInput
        v-model="email"
        color="secondary"
        icon="i-lucide-at-sign"
        placeholder="Enter your email"
        size="md"
      />

      <UTextarea
        v-model="message"
        color="secondary"
        :rows="7"
        placeholder="Type something..."
        class="variant-outline"
      />
      <div class="flex justify-end">
        <UButton
          color="secondary"
          type="submit"
          class="px-16 py-2 text-white bg-button rounded-full"
        >
          Send
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
