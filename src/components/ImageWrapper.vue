<template>
    <BulbIcon v-if="image === 'bulb'" class="image" :colors="colors" />
    <QuestionIcon v-else-if="image === 'question'" class="image" :colors="colors" />
    <ContextIcon v-else-if="image === 'context'" class="image" :colors="colors" />
    <img v-else class="image" :src="imageUrl" />
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import BulbIcon from './icons/BulbIcon.vue';
import QuestionIcon from './icons/QuestionIcon.vue';
import ContextIcon from './icons/ContextIcon.vue';
const { image, colors } = defineProps<{image: string, colors: CaseStudy['colors']}>()

const imageUrl = computed(() => {
    return new URL(`../assets/${image}`, import.meta.url).toString()
})
</script>

<style scoped>
.image {
    width: 100%;
}
</style>