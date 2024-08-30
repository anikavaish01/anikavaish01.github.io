<template>
    <h2 class="subtitle">{{ content }}</h2>
</template>

<script lang="ts">
export default {
    props: {
        content: String
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