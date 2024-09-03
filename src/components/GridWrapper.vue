<template>
    <div class="blocks" :style="`background-color: ${color ?? 'transparent'}`">
        <div v-for="(item, index) in data" :key="`${JSON.stringify(item)}-${index}`" :class="`block-item ${padding ? 'block-item-padding' : ''}`"
            :style="`background-color: ${item.color ?? 'transparent'}; color: ${item['text-color'] ?? 'inherit'}`">
            <DynamicComponent v-if="item.type === 'grid-item'" :items="(item.data as Daum[])" :colors="props.colors" />
        </div>
    </div>
</template>

<!-- eslint-disable vue/no-unused-components -->
<script setup lang="ts">
import DynamicComponent from './DynamicComponent.vue'
import { computed } from 'vue'

const props = defineProps<{ data: Daum[], color?: string, colors: CaseStudy['colors']; padding?: boolean }>()

const data = computed(() => props.data as Daum[])
</script>

<style scoped>
.blocks {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    border-radius: 10px;
}

.block-item {
    width: 0;
    flex: 1;
    border-radius: 10px;
}

.block-item-padding {
    padding-bottom: 35px;
    padding-top: 35px;
    padding-left: 30px;
    padding-right: 30px;
}

.block-item:not(:last-child) {
    margin-right: 30px;
}
</style>

<style>
.block-item .paragraph {
    margin-bottom: 0px !important;   
}

.block-item .image {
    width: 100% !important;   
}
</style>