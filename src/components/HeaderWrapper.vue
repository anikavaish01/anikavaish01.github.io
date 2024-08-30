<template>
    <h1 class="header">{{ content }}</h1>
</template>

<script lang="ts">
export default {
    props: {
        content: String,
    }
}
</script>

<style scoped>
.title,
h1 {
    font-size: 30px;
    font-weight: 200;
    margin-bottom: 50px;
}
</style>