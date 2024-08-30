<template>
    <BulbIcon v-if="image === 'bulb'" :class="class" />
    <!-- <QuestionIcon v-else-if="image === 'question'" class="image" /> -->
    <!-- <ContextIcon v-else-if="image === 'context'" class="image" /> -->

    <inline-svg v-if="image.endsWith('svg')" :src="imageUrl"></inline-svg>
    <img v-else class="image" :src="imageUrl" />
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import BulbIcon from './icons/BulbIcon.vue';
const { image } = defineProps<{ image: string; class?: string }>()

const imageUrl = computed(() => {
    return new URL(`../assets/${image}`, import.meta.url).toString()
})
</script>

<style scoped>
.image {
    object-fit: scale-down;
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: 60%;
    margin-top: 20px;
    margin-bottom: 20px;
}

.icon-bulb {
    object-fit: scale-down;
}
</style>