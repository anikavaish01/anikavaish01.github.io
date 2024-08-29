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
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 35px;
}
</style>