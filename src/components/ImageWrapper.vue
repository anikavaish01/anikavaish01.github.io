<template>
    <img class="image" :src="imageUrl" />
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
const { image } = defineProps({
    image: String
})

const imageUrl = computed(() => {
    return new URL(`../assets/${image}`, import.meta.url).toString()
})
</script>

<style scoped>
.image {
    width: 100%;
}
</style>