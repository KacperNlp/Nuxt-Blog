<template>
  <div class="my-8">
    <UContainer>
      <AppFilters
        :categories="categories"
        :selected-category="selectedCategory"
        @update:selected-category="handleSelectedCategory"
      />
      <div
        v-if="articles.length && !isLoading"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8"
      >
        <div v-for="article in articles" :key="article.id">
          <AppArticle :article="article" />
        </div>
      </div>
      <div v-else-if="isLoading" class="my-8">
        <AppLoader />
      </div>
      <UAlert v-else title="No articles found" class="mt-8" />
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const articles = ref([]);
const categories = ref([]);
const selectedCategory = ref<string | null>("All");
const isLoading = ref(true);

onMounted(async () => {
  try {
    isLoading.value = true;
    [articles.value, categories.value] = await Promise.all([
      $fetch("/api/posts"),
      $fetch("/api/categories"),
    ]);
    isLoading.value = false;

    categories.value.unshift("All");
  } catch (error) {
    console.error("Error fetching articles:", error);
  }
});

watch(selectedCategory, async (value) => {
  try {
    isLoading.value = true;

    if (value === "All") {
      articles.value = await $fetch("/api/posts");
    } else {
      articles.value = await $fetch(`/api/posts/category/${value}`);
    }

    isLoading.value = false;
  } catch (error) {
    console.error("Error fetching articles:", error);
  }
});

function handleSelectedCategory(category: string) {
  selectedCategory.value = category;
}
</script>
