<template>
    <div class="numbers" :style="`color: #${color}`">{{ title }}</div>
</template>

<script lang="ts">
    export default {
        props: {
            title: String,
            color: String
        }
    }
</script>

<style scoped>
.numbers {
  font-size: 22px;
  font-weight: 900;
}
</style>