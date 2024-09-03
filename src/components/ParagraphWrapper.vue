<template>
    <div class="paragraph">
        <div class="paragraph-item" v-for="(line, index) in parsedContent" :key="`line-${index}`">
            <div v-if="line.type === 'paragraph'" :style="`color: ${color}`">{{ line.data }}</div>
            <ul class="bullets" v-if="line.type === 'bullet'">
                <li v-for="bullet in line.data" :key="bullet" :style="`color: ${color}`">{{ bullet }}</li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const { content } = defineProps({
    content: String,
    color: String
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
.paragraph {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 20px;
}

.bullets {
    padding-left: 20px;
}

.bullets>* {
    font-size: 15px;
    line-height: 25px;
    color: #A5A29F
}

.paragraph-item {
    min-height: 18px;
}
</style>