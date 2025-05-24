<template>
    <UContainer>
        <h1>Hello World</h1>
    </UContainer>
</template>

<script setup>
const articles = ref([])

onMounted(async () => {
    try {
        const response = await fetch('http://localhost:3000/articles')
        console.log(response)
        articles.value = await response.json()
    } catch (error) {
        console.error(error)
    }
})
</script>
