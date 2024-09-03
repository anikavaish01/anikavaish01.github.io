<template>
    <div class="small-sub-header" :style="`color: ${color}`">{{ content }}</div>
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
.small-sub-header {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 15px;
}
</style>