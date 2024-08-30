<template>
    <div class="project" :style="`background-color: ${color ?? 'transparent'}`">
        <div v-for="(item, index) in data" :key="`${item.type}-${index}`" class="project-item"
            :style="`background-color: ${item.color ?? 'transparent'}; color: ${item['text-color'] ?? 'inherit'}`">
            <DynamicComponent v-if="item.type === 'project-details'" :items="(item.data as Daum[])"
                :colors="props.colors" />
        </div>
    </div>
</template>

<!-- eslint-disable vue/no-unused-components -->
<script setup lang="ts">
import DynamicComponent from './DynamicComponent.vue'
import { computed } from 'vue'

const props = defineProps<{ data: Daum[], color?: string, colors: CaseStudy['colors'] }>()

const data = computed(() => props.data as Daum[])
</script>

<style scoped>
.project {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    border-radius: 10px;
}

.project-item {
    width: 0;
    flex: 1;
    border-radius: 10px;
}
</style>