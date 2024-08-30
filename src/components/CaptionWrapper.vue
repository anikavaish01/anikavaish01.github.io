<template>
    <div class="caption">{{ content }}</div>
</template>

<script lang="ts">
export default {
    props: {
        content: String,
    }
}
</script>

<style scoped>
.caption {
    font-size: 12px;
    font-weight: 300;
    font-style: italic;
    margin-top: 15px;
}
</style>