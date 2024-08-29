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
.title {
  padding-left: 13px;
  font-size: 32px;
  font-weight: 400;
  margin-bottom: 85px;
}
</style>