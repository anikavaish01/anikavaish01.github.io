<template>
    <h1 class="title" :style="`border-left: 9px solid #${color}`">{{ title }}</h1>
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
.title {
  padding-left: 13px;
  font-size: 36px;
  font-weight: 900;
  margin-bottom: 58px;
}
</style>