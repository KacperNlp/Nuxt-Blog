<template>
    <UCard class="relative">
        <img :src="article.image" alt="" class="w-full h-48 object-cover rounded-lg mb-4">
        <h2 class="text-lg md:text-xl font-bold mb-2">{{ article.title }}</h2>
        <div class="flex flex-wrap gap-2">
            <UBadge v-for="tag in article.tags" :key="tag" variant="outline">{{ tag }}</UBadge>
        </div>
        <div class="flex flex-col gap-1 my-2 text-sm">
            <strong>{{ article.author }}</strong>
        </div>
        <UBadge class="absolute top-2 right-2" color="neutral">{{ article.category }}</UBadge>
        <p class="text-xs md:text-sm mb-2 text-gray-400">{{ article.shortDescription }}</p>
        <UButton :to="`/${article.id}`">Read more</UButton>
    </UCard>
</template>

<script setup lang="ts">
import type { Post } from '@/types/posts'

defineProps<{
    article: Post
}>()
</script>