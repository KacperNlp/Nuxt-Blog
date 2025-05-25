<template>
    <UContainer>
        <div v-if="articles.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
            <div v-for="article in articles" :key="article.id">
                <AppArticle :article="article" />
            </div>
        </div>
    </UContainer>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const articles = ref([])

onMounted(async () => {
    try {
        articles.value = await $fetch('/api/posts')
        console.log('Fetched articles:', articles.value)
    } catch (error) {
        console.error('Error fetching articles:', error)
    }
})
</script>
