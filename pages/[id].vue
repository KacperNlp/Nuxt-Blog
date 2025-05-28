<template>
  <div class="my-8">
    <div>
      <nuxt-link
        to="/"
        class="text-green-500 hover:text-green-600 transition-colors"
        >Back to home</nuxt-link
      >
    </div>
    <div class="my-8 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 md:gap-16">
      <div v-if="article">
        <img
          :src="article.image"
          alt=""
          class="w-full h-72 object-cover rounded-lg mb-8"
        />
        <h1 class="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
          {{ article.title }}
        </h1>
        <div class="flex flex-wrap gap-2">
          <UBadge v-for="tag in article.tags" :key="tag" variant="outline">{{
            tag
          }}</UBadge>
        </div>
        <div class="flex flex-col gap-1 mt-2 mb-4 text-sm">
          <strong>{{ article.author }}</strong>
        </div>
        <p class="text-gray-400 mb-2">{{ article.shortDescription }}</p>
        <p>{{ article.content }}</p>
      </div>
      <div v-if="articlesFromTheSameCategory">
        <h2 class="text-lg md:text-xl lg:text-2xl font-bold mb-4">
          Articles from the same category
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
          <div v-for="article in articlesFromTheSameCategory" :key="article.id">
            <AppArticle :article="article" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { id } = useRoute().params;
const article = ref(null);
const articlesFromTheSameCategory = ref([]);

onMounted(async () => {
  try {
    article.value = await $fetch(`/api/posts/${id}`);
    const categoriesTypes = article.value.category;

    articlesFromTheSameCategory.value = await $fetch(
      `/api/posts/category/${categoriesTypes}`
    );
  } catch (error) {
    console.error("Error fetching article:", error);
  }
});
</script>
