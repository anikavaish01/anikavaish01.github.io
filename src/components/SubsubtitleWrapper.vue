<template>
    <h2 class="subsubtitle" :style="`color: #${color}`">{{ title }}</h2>
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
.subsubtitle {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 15px;
}
</style>