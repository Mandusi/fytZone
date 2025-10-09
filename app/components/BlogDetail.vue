<template>
  <div class="max-w-4xl flex flex-col gap-10 py-20 max-sm:p-3">
    <img :src="imageUrl" :alt="title" class="w-full h-auto my-4 rounded-lg" />
    <div class="flex flex-col gap-6">
      <span class="text-4xl max-sm:text-xl font-semibold">
        {{ title }}
      </span>
      <div class="max-sm:text-sm flex flex-col gap-2">
        <div
          v-for="(section, index) in contentSections"
          :key="index"
          class="flex flex-col gap-1"
        >
          <span
            v-if="section.type === 'heading'"
            class="text-2xl font-semibold"
          >
            {{ section.content }}
          </span>
          <p v-else-if="section.type === 'paragraph'">
            {{ section.content }}
          </p>
          <ul v-else-if="section.type === 'list'" class="list-disc list-inside">
            <li v-for="(item, idx) in section.items" :key="idx" class="mb-2">
              <strong>{{ item.term }}</strong> {{ item.description }}
            </li>
          </ul>
          <div
            v-else-if="section.type === 'tip'"
            class="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-4"
          >
            <p class="text-blue-800 dark:text-blue-200">
              <strong>💡 Tip:</strong> {{ section.content }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ListItem {
  term: string;
  description: string;
}

interface ContentSection {
  type: "heading" | "paragraph" | "list" | "tip";
  content?: string;
  items?: ListItem[];
}

const props = defineProps({
  title: { type: String, required: true },
  content: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

const contentSections = computed((): ContentSection[] => {
  const sections: ContentSection[] = [];
  const lines = props.content.split("\n").filter((line) => line.trim());

  let currentList: ContentSection | null = null;

  for (const line of lines) {
    const trimmedLine = line.trim();

    // Check for numbered headings
    if (/^\d+\./.test(trimmedLine)) {
      if (currentList) {
        sections.push(currentList);
        currentList = null;
      }
      sections.push({
        type: "heading",
        content: trimmedLine.replace(/^\d+\.\s+/, ""),
      });
    }
    // Check for conclusion
    else if (trimmedLine === "Conclusion") {
      if (currentList) {
        sections.push(currentList);
        currentList = null;
      }
      sections.push({
        type: "heading",
        content: trimmedLine,
      });
    }
    // Check for tips
    else if (trimmedLine.startsWith("💡 Tip:")) {
      if (currentList) {
        sections.push(currentList);
        currentList = null;
      }
      sections.push({
        type: "tip",
        content: trimmedLine.replace("💡 Tip: ", ""),
      });
    }
    // Check for list items (with – or →)
    else if (trimmedLine.includes(" – ") || trimmedLine.includes(" → ")) {
      const separator = trimmedLine.includes(" – ") ? " – " : " → ";
      const parts = trimmedLine.split(separator);
      const term = parts[0]?.trim() || "";
      const description = parts[1]?.trim() || "";

      if (!currentList) {
        currentList = {
          type: "list",
          items: [],
        };
      }

      if (!currentList.items) {
        currentList.items = [];
      }

      currentList.items.push({
        term,
        description: separator + description,
      });
    }
    // Regular paragraphs
    else if (trimmedLine.length > 0) {
      if (currentList) {
        sections.push(currentList);
        currentList = null;
      }
      sections.push({
        type: "paragraph",
        content: trimmedLine,
      });
    }
  }

  // Add any remaining list
  if (currentList) {
    sections.push(currentList);
  }

  return sections;
});
</script>
