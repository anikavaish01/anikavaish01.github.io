<template>
    <div class="details">
        <div v-for="(item, index) in data" :key="`${item.type}-${index}`" class="detail-item">
            <DynamicComponent v-if="item.type === 'grid-item'" :items="(item.data as Daum[])" :colors="props.colors" />
        </div>
    </div>
</template>

<!-- eslint-disable vue/no-unused-components -->
<script setup lang="ts">
import DynamicComponent from './DynamicComponent.vue'
import { computed } from 'vue'

const props = defineProps<{data: Daum[], colors: CaseStudy['colors']}>()

const data = computed(() => props.data as Daum[])
</script>

<style scoped>
.details {
    display: flex;
    justify-content: space-between;
}

.detail-item {
    width: 0;
    flex: 1;
    margin-right: 74px
}
</style>