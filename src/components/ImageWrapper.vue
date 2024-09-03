<template>
    <BulbIcon v-if="image === 'bulb'" class="icon-bulb" />
    <!-- <QuestionIcon v-else-if="image === 'question'" class="image" /> -->
    <!-- <ContextIcon v-else-if="image === 'context'" class="image" /> -->

    <div v-else-if="image.endsWith('svg')" style="width: 100% !important">
        <inline-svg :src="imageUrl" style="width: 100% !important"></inline-svg>
        <CaptionWrapper v-if="caption" :content="caption" />
    </div>
    
    <component :is="link ? 'a' : 'div'" v-else class="image" :href="link" target="_blank">
        <img style="width: 100%" :src="imageUrl" />
        <CaptionWrapper v-if="caption" :content="caption" />
    </component>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import BulbIcon from './icons/BulbIcon.vue';
import CaptionWrapper from './CaptionWrapper.vue';
const { image } = defineProps<{ image: string; caption?: string, link?: string }>()

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