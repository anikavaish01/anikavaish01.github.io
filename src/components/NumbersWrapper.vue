<template>
    <div class="numbers" :style="`color: #${color}`">{{ content }}</div>
</template>

<script lang="ts">
export default {
    props: {
        content: String,
        color: String
    }
}
</script>

<style scoped>
.numbers {
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 10px;
}
</style>