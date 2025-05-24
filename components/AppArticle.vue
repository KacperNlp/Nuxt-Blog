<template>
    <UCard>
        <UImage :src="article.image" />
        <h2>{{ article.title }}</h2>
        <p>{{ article.shortDescription }}</p>
        <p>{{ article.author }}</p>
        <p>{{ article.category }}</p>
        <div>
            <UBadge v-for="tag in article.tags" :key="tag">{{ tag }}</UBadge>
        </div>
        <NuxtLink :to="`/${article.id}`">Read more</NuxtLink>
    </UCard>
</template>

<script setup lang="ts">
import type { Post } from '@/types/posts'

defineProps<{
    article: Post
}>()
</script>