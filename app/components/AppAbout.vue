<template>
  <div
    id="about"
    class="flex w-full h-screen bg-secondary-bg justify-center items-center"
  >
    <div class="max-w-4xl flex flex-col p-2 md:p-0 gap-8">
      <h2 class="text-black dark:text-primary-text font-[Inter]">About</h2>
      <p class="mt-4 text-lg">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>

      <div class="flex gap-5 items-center">
        <UIcon
          name="i-lucide-dumbbell"
          size="24"
          class="bg-button dark:bg-blue-300"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          asperiores neque quibusdam?
        </p>
      </div>

      <div class="flex gap-5 items-center">
        <UIcon
          name="i-lucide-activity"
          size="24"
          class="bg-button dark:bg-blue-300"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste libero
          eius necessitatibus.
        </p>
      </div>

      <div class="flex gap-5 items-center">
        <UIcon
          name="i-lucide-heart"
          size="24"
          class="bg-button dark:bg-blue-300"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          nesciunt qui perferendis iure, quis repellat!
        </p>
      </div>
    </div>
  </div>
</template>
