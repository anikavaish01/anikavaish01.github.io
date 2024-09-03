<template>
    <div class="caption">
        <div class="caption-item" v-for="(line, index) in parsedContent" :key="`line-${index}`">
            <div v-if="line.type === 'paragraph'">{{ line.data }}</div>
            <ul class="bullets" v-if="line.type === 'bullet'">
                <li v-for="bullet in line.data" :key="bullet">{{ bullet }}</li>
            </ul>
        </div>

    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const { content } = defineProps({
    content: String
})

const parsedContent = computed(() => {
    if (!content) {
        return [{ type: 'paragraph', data: content }]
    }
    const lines = content.split('\n')
    const ret = []
    for (const line of lines) {
        if (line.startsWith('-')) {
            if (ret[ret.length - 1]?.type === 'bullet') {
                (ret[ret.length - 1]?.data as string[]).push(line.replace('-', ''))
            } else {
                ret.push({ type: 'bullet', data: [line.replace('-', '')] })
            }
        } else {
            ret.push({ type: 'paragraph', data: line })
        }
    }

    return ret
})

</script>

<style scoped>
.caption, .caption-item {
    font-size: 12px;
    font-weight: 300;
    font-style: italic;
    margin-top: 15px;
}
</style>