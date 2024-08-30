<template>
    <h2 class="section-header" :style="`color: #${color}`">{{ content }}</h2>
</template>

<script lang="ts">
export default {
    props: {
        content: String,
        color: String
    }
}
</script>

<style scoped lang="scss">
.section-header {
    font-size: 12px;
    font-weight: 300;
    margin-bottom: 20px;
    text-transform: uppercase;
    max-width: min(1000px, 100vw - 50px);
    margin-left: auto;
    margin-right: auto;
}
</style>