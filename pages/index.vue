<template>
    <main class="min-h-screen w-[90%] mx-auto max-w-[1200px]">
        <UContainer>
            <div v-if="articles.length">
                <div v-for="article in articles" :key="article.id">
                    <AppArticle :article="article" />
                </div>
            </div>
        </UContainer>
    </main>
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
