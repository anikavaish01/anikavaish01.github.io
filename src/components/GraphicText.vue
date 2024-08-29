<template>
    <div class="graphic-text">{{ content }}</div>
</template>

<script lang="ts">
    export default {
        props: {
            content: String,
            colored: Boolean
        }
    }
</script>

<style scoped>
.graphic-text {
  font-size: 14px;
  font-weight: 400;
  color: #616466
}
</style>