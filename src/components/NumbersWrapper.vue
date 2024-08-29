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
  font-size: 22px;
  font-weight: 900;
  margin-bottom: 10px;
}
</style>