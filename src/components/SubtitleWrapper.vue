<template>
    <h2 class="subtitle">{{ title }}</h2>
</template>

<script lang="ts">
    export default {
        props: {
            title: String
        }
    }
</script>

<style scoped>
.subtitle {
  font-size: 24px;
  font-weight: 900;
  margin-bottom: 15px;
}
</style>