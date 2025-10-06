<template>
  <div
    id="home"
    class="flex w-full h-[calc(100vh-75px)] justify-center items-center"
  >
    <div
      class="flex flex-col items-center justify-center max-w-3xl text-center gap-10 py-20 px-4 sm:px-6 lg:px-8"
    >
      <h1 class="text-black dark:text-primary-text">
        Design Your Gym with
        <span
          class="bg-gradient-to-b from-gradient-start to-gradient-end text-transparent bg-clip-text"
          >AI</span
        >
      </h1>

      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          odio unde id esse earum nam reprehenderit cumque aspernatur tempore.
          Laudantium maiores enim nulla itaque sint eveniet. Consequatur iste
          perferendis animi quidem quaerat ipsa ipsum? Voluptatum.
        </p>
      </div>
      <UButton
        icon="i-lucide-sparkles"
        size="md"
        color="secondary"
        variant="solid"
        class="px-10 py-2 text-white bg-button rounded-full"
        @click="$router.push('/demo')"
        >Try Now</UButton
      >
    </div>
  </div>
</template>
