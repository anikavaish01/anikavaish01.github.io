<template>
    <h2 class="subtitle" :style="`color: ${color}`">{{ content }}</h2>
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
.subtitle {
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 20px;
}
</style>