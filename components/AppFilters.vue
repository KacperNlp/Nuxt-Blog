<template>
  <div>
    <USelectMenu
      v-model="localSelectedCategory"
      :items="categories"
      class="min-w-48"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  categories: string[];
  selectedCategory: string;
}>();

const localSelectedCategory = ref(props.selectedCategory);

const emit = defineEmits<{
  (e: "update:selectedCategory", value: string): void;
}>();

watch(localSelectedCategory, (value) => {
  emit("update:selectedCategory", value);
});

// Watch for changes from parent
watch(
  () => props.selectedCategory,
  (newValue) => {
    localSelectedCategory.value = newValue;
  }
);
</script>
