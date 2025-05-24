<template>
    <div v-if="article">
        <h1>Hello {{ id }}</h1>
        <p>{{ article.title }}</p>
        <p>{{ article.content }}</p>
    </div>
</template>

<script setup>
const { id } = useRoute().params
const article = ref(null)

onMounted(async () => {
    try {
        article.value = await $fetch(`/api/posts/${id}`)
    } catch (error) {
        console.error('Error fetching article:', error)
    }
})
</script>