<template>
    <div>
        <h1>Hello {{ id }}</h1>
    </div>
</template>

<script setup>
const { id } = useRoute().params
</script>