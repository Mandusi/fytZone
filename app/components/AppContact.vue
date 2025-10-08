<template>
  <div
    id="contact"
    class="flex w-full h-[calc(100vh-127px)] justify-center items-center"
  >
    <UForm
      :schema="schema"
      :state="state"
      class="flex flex-col p-2 md:p-0 gap-4 w-full max-w-4xl mt-8"
      @submit="onSubmit"
    >
      <h2 class="text-black dark:text-primary-text">
        {{ $t("contact.title") }}
      </h2>
      <p class="mt-4 text-lg">
        {{ $t("contact.description") }}
      </p>

      <UFormField class="w-full" name="email">
        <UInput
          v-model="state.email"
          color="secondary"
          icon="i-lucide-at-sign"
          :placeholder="$t('contact.emailPlaceholder')"
          class="variant-outline w-full"
        />
      </UFormField>

      <UFormField class="w-full" name="message">
        <UTextarea
          v-model="state.message"
          color="secondary"
          :rows="7"
          :placeholder="$t('contact.messagePlaceholder')"
          class="variant-outline w-full"
        />
      </UFormField>

      <div class="flex justify-end">
        <UButton
          color="secondary"
          type="submit"
          class="px-16 py-2 text-white bg-button rounded-full"
        >
          {{ $t("contact.send") }}
        </UButton>
      </div>
    </UForm>
  </div>
</template>

<script setup lang="ts">
import * as v from "valibot";
import type { FormSubmitEvent } from "@nuxt/ui";

const schema = v.object({
  email: v.pipe(v.string(), v.email("Invalid email")),
  message: v.pipe(v.string(), v.minLength(8, "Must be at least 8 characters")),
});

type Schema = v.InferOutput<typeof schema>;

const state = reactive({
  email: "",
  message: "",
});

const toast = useToast();

async function onSubmit(event: FormSubmitEvent<Schema>) {
  await useFetch(`${useRuntimeConfig().public.API}/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: event.data,
    onResponse({ response }) {
      if (response.status === 200) {
        toast.add({
          title: "Success",
          description: "Your message has been sent successfully.",
          color: "secondary",
        });
      } else {
        toast.add({
          title: "Error",
          description: "There was an error sending your message.",
          color: "error",
        });
      }
    },
  });

  state.email = "";
  state.message = "";
}
</script>
